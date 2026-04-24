import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { Pokemon } from "../types/pokemon";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.get<Pokemon[]>("/pokemons").then((res) => res.data),
    staleTime: 3 * 60 * 1000, // 3 dk cache
  });
};

export const useCreatePokemon = () => {
  // queryKey'i çekiyoruz
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (p: Omit<Pokemon, "id">) =>
      api.post<Pokemon>("/pokemons", p).then((res) => res.data),
    // Success sonrası cache'i temizliyoruz
    // Otomatik refetch yapar
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
};
