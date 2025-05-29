import { create } from "zustand";

import service from "./../services/mockapi";

const usePokemonsStore = create((set, get) => ({
  pokemons: [],
  fetchPokemons: async () => {
    const response = await service.get(`pokemons`);
    set({ pokemons: response });
  },
  changePokemon: async (item) => {
    await service.put(`pokemons`, item.id, {status: !item.status});
    const {fetchPokemons} = get();
    fetchPokemons();
  },
}));

export default usePokemonsStore;
