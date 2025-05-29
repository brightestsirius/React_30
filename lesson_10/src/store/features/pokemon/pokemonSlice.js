// src/services/pokemonApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://680fc8ae27f2fdac240f60df.mockapi.io/",
  }),
  // Визначаємо два типи тегів: для колекції ('Pokemons') і для окремого елемента ('Pokemon')
  tagTypes: [`Pokemons`, `Pokemon`],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => `pokemons`,
      // `providesTags` для списку покемонів:
      // - Якщо є результат, ми надаємо тег 'Pokemons' з ID 'LIST' (для загального списку)
      // - А також генеруємо тег 'Pokemon' з конкретним ID для кожного покемона в списку.
      //   Це дозволить нам інвалідувати конкретний покемон, який знаходиться в цьому списку.
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Pokemon', id })), // Тег для кожного окремого покемона
              { type: 'Pokemons', id: 'LIST' }, // Загальний тег для списку
            ]
          : [{ type: 'Pokemons', id: 'LIST' }], // Якщо результату немає, все одно надаємо тег для списку
    }),

    // ОПЦІЙНО: Запит для отримання одного покемона за ID. Це дуже корисно для гранульованої інвалідації.
    getPokemonById: builder.query({
      query: (id) => `pokemons/${id}`,
      // Цей запит надає тег для конкретного покемона.
      providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
    }),

    updatePokemonStatus: builder.mutation({
      query(data) {
        const { id, status } = data;
        return {
          url: `pokemons/${id}`,
          method: "PUT",
          body: { status: !status },
        };
      },
      // `invalidatesTags` для мутації:
      // - Інвалідуємо конкретний тег 'Pokemon' за його ID.
      //   Це змусить `getPokemonById(id)` (якщо такий запит існує) перевиконатись.
      // - Ми також інвалідуємо загальний тег списку 'Pokemons' з ID 'LIST'.
      //   Це змусить `getPokemons` перевиконатись, щоб оновити дані в загальному списку.
      invalidatesTags: (result, error, { id }) => [
        { type: 'Pokemon', id },      // Інвалідуємо конкретний покемон
        { type: 'Pokemons', id: 'LIST' }, // Інвалідуємо загальний список
      ],
      // ОПЦІЙНО: Оптимістичне оновлення кешу
      async onQueryStarted({ id, status }, { dispatch, queryFulfilled }) {
        // Оптимістично оновлюємо кеш списку
        const patchResultForList = dispatch(
          pokemonApi.util.updateQueryData('getPokemons', undefined, (draft) => {
            const pokemonToUpdate = draft.find(pokemon => pokemon.id === id);
            if (pokemonToUpdate) {
              pokemonToUpdate.status = !status; // Логіка зміни статусу
            }
          })
        );

        // ОПЦІЙНО: Якщо у вас є запит на один об'єкт, оптимістично оновлюємо і його
        const patchResultForSingle = dispatch(
            pokemonApi.util.updateQueryData('getPokemonById', id, (draft) => {
                if (draft) {
                    draft.status = !status;
                }
            })
        );


        try {
          await queryFulfilled;
        } catch {
          // Якщо сталася помилка, відкочуємо оптимістичні зміни
          patchResultForList.undo();
          patchResultForSingle.undo(); // Відкочуємо і для одиночного запиту
        }
      },
    }),

    // Для POST запитів, які додають новий елемент до списку
    addPokemon: builder.mutation({
      query: (newPokemon) => ({
        url: `pokemons`,
        method: 'POST',
        body: newPokemon,
      }),
      // При додаванні нового елемента, інвалідуємо лише загальний список.
      // Нового елемента ще немає в кеші за ID, тому інвалідувати його немає сенсу.
      invalidatesTags: [{ type: 'Pokemons', id: 'LIST' }],
    }),

    // Для DELETE запитів, які видаляють елемент зі списку
    deletePokemon: builder.mutation({
      query: (id) => ({
        url: `pokemons/${id}`,
        method: 'DELETE',
      }),
      // При видаленні елемента, інвалідуємо його конкретний тег та загальний список.
      invalidatesTags: (result, error, id) => [
        { type: 'Pokemon', id },
        { type: 'Pokemons', id: 'LIST' },
      ],
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery, useUpdatePokemonStatusMutation, useAddPokemonMutation, useDeletePokemonMutation } =
  pokemonApi;