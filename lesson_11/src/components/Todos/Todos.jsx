import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import service from "../../services/mockapi";

import TodosForm from "./TodosForm";

export default function Todos() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => service.get(`todos`),
  });

  const mutation = useMutation({
    mutationFn: async (item) => {
      return service.put(`todos`, item.id, { completed: !item.completed });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <TodosForm />
      {data.length ? (
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              style={{ color: item.completed && `crimson` }}
              onClick={() => mutation.mutate(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
