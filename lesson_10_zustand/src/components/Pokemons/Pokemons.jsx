import React, { useEffect } from "react";
import usePokemonsStore from "./../../store/pokemons";

export default function Pokemons() {
  const pokemons = usePokemonsStore((state) => state.pokemons);
  const fetchPokemons = usePokemonsStore((state) => state.fetchPokemons);
  const changePokemon = usePokemonsStore((state) => state.changePokemon);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return pokemons.length ? (
    <ul>
      {pokemons.map((item) => (
        <li
          style={{ color: item.status && `crimson` }}
          key={item.id}
          onClick={() => changePokemon(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  ) : null;
}
