import React from "react";
import { useForm, Controller } from "react-hook-form";
import {useMutation, useQueryClient} from '@tanstack/react-query'

import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";

import Input from "./../Input/Input";

import service from './../../services/mockapi'

export default function TodosForm() {
  const schema = zod
    .object({
      title: zod.string().min(3, `Мінімальна к-сть символів 3`),
      email: zod.string().email(),
      completed: zod.boolean().optional(),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      title: "New todo",
      email: "sheva@gmail.com",
      completed: true,
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (item) => {
      return service.post(`todos`, item);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      reset();
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => <Input {...field} type="text" />}
      />
      {errors.title && <p>{errors.title.message}</p>}

      <Controller
        name="email"
        control={control}
        render={({ field }) => <Input {...field} type="email" />}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Controller
        name="completed"
        control={control}
        render={({ field }) => <Input {...field} type="checkbox" />}
      />
      {errors.completed && <p>{errors.completed.message}</p>}

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
