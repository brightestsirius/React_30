import React from "react";
import {
  useGetPokemonsQuery,
  useUpdatePokemonStatusMutation,
} from "../../store/features/pokemon/pokemonSlice";

export default function Pokemon() {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const [updatePost] = useUpdatePokemonStatusMutation();

  const handleStatus = (item) => updatePost(item);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return data.length ? (
    <ul>
      {data.map((item) => (
        <li
          key={item.id}
          style={{ color: item.status && `crimson` }}
          onClick={() => handleStatus(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  ) : null;
}
