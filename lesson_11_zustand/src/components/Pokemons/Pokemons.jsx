import React, { useEffect } from "react";
import usePokemonsStore from "./../../store/features/pokemons";

export default function Pokemons() {
  const { pokemons, loading, error, fetchPokemons, changePokemon } =
    usePokemonsStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return pokemons.length ? (
    <ul>
      {pokemons.map((item) => (
        <li
          key={item.id}
          style={{ color: item.status && `crimson` }}
          onClick={() => changePokemon(item.id, { status: !item.status })}
        >
          {item.name}
        </li>
      ))}
    </ul>
  ) : null;
}
