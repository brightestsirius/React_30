import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://680fc8ae27f2fdac240f60df.mockapi.io/",
  }),
  tagTypes: ['Pokemons'],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => `pokemons`,
      providesTags: (result) =>
        result
          ?
            [
              ...result.map(({ id }) => ({ type: 'Pokemons', id })),
              { type: 'Pokemons', id: 'LIST' },
            ]
          :
            [{ type: 'Pokemons', id: 'LIST' }],
    }),
    getPokemon: builder.query({
      query: (id) => `pokemons/${id}`,
      providesTags: (result, error, id) => [{ type: 'pokemons', id }],
    }),
    updatePost: builder.mutation({
      query(data) {
        const { id, status } = data;
        return {
          url: `pokemons/${id}`,
          method: "PUT",
          body: { status: !status },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Pokemons', id }],
    }),
  }),
});

export const { useGetPokemonsQuery, useUpdatePostMutation } = pokemonApi;
