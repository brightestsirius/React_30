import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import TodosFormInput from "./TodosFormInput";

import service from "./../../services/mockapi";

export default function TodosForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (item) => {
      return service.post(`todos`, item);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      reset();
    },
  });

  const schema = zod
    .object({
      title: zod.string().min(1, `Заголовок має містити не менше 1 символу`),
      completed: zod.boolean().optional(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "New title",
      completed: false,
    },
    mode: `onBlur`,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Todo title:</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TodosFormInput {...field} type="text" id="title" />
          )}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="completed">Todo completed:</label>
        <Controller
          name="completed"
          control={control}
          render={({ field }) => (
            <TodosFormInput {...field} type="checkbox" id="completed" />
          )}
        />
        {errors.completed && <p>{errors.completed.message}</p>}
      </div>

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
