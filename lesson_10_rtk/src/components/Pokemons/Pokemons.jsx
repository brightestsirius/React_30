import React from "react";
import { useGetPokemonsQuery, useUpdatePostMutation } from "../../store/features/pokemons/pokemonsApi";

export default function Pokemons() {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const [updatePost, {data: dataMutation, isLoading: isLoadingMutation, isSuccess, isError}] = useUpdatePostMutation();

  const handleItemChange = (item) => updatePost(item);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return data.length ? (
    <ul>
      {data.map((item) => (
        <li key={item.id} style={{ color: item.status && `crimson` }} onClick={() => handleItemChange(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  ) : null;
}
