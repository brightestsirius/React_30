import React, { useEffect } from "react";

import usePokemonsStore from "./../../store/features/pokemons";

export default function Pokemons() {
  const { pokemons, isLoading, error, fetchPokemons, updatePokemonStatus } =
    usePokemonsStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return pokemons.length ? (
    <ul>
      {pokemons.map((item) => (
        <li
          key={item.id}
          style={{ color: item.status && `crimson` }}
          onClick={() => updatePokemonStatus(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  ) : null;
}
