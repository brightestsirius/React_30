import { create } from "zustand";

import service from "./../../services/mockapi";

const usePokemonsStore = create((set, get) => ({
  pokemons: [],
  loading: false,
  error: null,

  fetchPokemons: async () => {
    set({ loading: true });
    try {
      const response = await service.get(`pokemons`);
      set({ pokemons: response, loading: false });
    } catch (err) {
      set({ loading: false, error: err.message });
    }
  },

  changePokemon: async (id, obj) => {
    set({ loading: true });
    try {
      await service.put(`pokemons`, id, obj);
      get().fetchPokemons();
    } catch (err) {
      set({ loading: false, error: err.message });
    }
  },
}));

export default usePokemonsStore;
