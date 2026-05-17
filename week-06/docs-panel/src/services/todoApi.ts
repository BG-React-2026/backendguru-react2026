// RTKQ = Redux Toolkit Query = React Query'e çok benziyor
import { baseApi } from "./baseApi";

// 1. Model tanımlanır
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// 2. createApi ile API tanımlanır
export const todoApi = baseApi.injectEndpoints({
  // Endpointler tanımlanır
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo, // HTTP: POST Body
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
