import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";

import Input from "./../Input/Input";

export default function TodosForm() {
  const schema = zod
    .object({
      email: zod.string().email(`Пароль не валідний`),
      password: zod.string().min(5, `Мінімальні к-сть символів 5`),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: `sheva@gmail.com`,
      password: ``,
    },
    mode: `onBlur`,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <Input {...field} type="email" />}
      ></Controller>
      {errors.email && <p>{errors.email.message}</p>}

      <Controller
        name="password"
        control={control}
        render={({ field }) => <Input {...field} type="password" />}
      ></Controller>
      {errors.password && <p>{errors.password.message}</p>}

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
