import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";
import type { Movie } from "../types/movie";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get<Movie[]>("/movies").then((res) => res.data),
    staleTime: 3 * 60 * 1000,
  });
};

export const useAddMovie = () => {
  // "movies" cache'ini sıfırlamak için client'ı çekelim
  const queryClient = useQueryClient();

  return useMutation({
    // Otomatik oluşturulan alanları Omit ediyoruz. Post etmiyoruz
    // Bu nedenle bu alanlar ilgili Movie tipinden çıkarılır
    mutationFn: (m: Omit<Movie, "id" | "created_date">) =>
      api.post<Movie>("/movies", m).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
};

// HTTP POST yerine HTTP DELETE isteği atıcaz
export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      api.delete(`/movies/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
};
