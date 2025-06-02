import { create } from "zustand";

import service from "../../services/mockapi";

const usePokemonsStore = create((set, get) => ({
  pokemons: [],
  isLoading: false,
  error: null,

  fetchPokemons: async () => {
    set({ isLoading: true });
    try {
      const response = await service.get(`pokemons`);
      set({ pokemons: response, isLoading: false });
    } catch (err) {
      set({ isLoading: false, error: err.message });
    }
  },

  changePokemonStatus: async (item) => {
    set({ isLoading: true });
    try {
      await service.put(`pokemons`, item.id, { status: !item.status });
      get().fetchPokemons();
    } catch (err) {
      set({ isLoading: false, error: err.message });
    }
  },
}));

export { usePokemonsStore };
