// RTKQ = Redux Toolkit Query = React Query'e çok benziyor
import { baseApi } from "./baseApi";

// 1. Model tanımlanır
export type User = {
  id: number;
  name: string;
  username: boolean;
};

// 2. createApi ile API tanımlanır
export const userApi = baseApi.injectEndpoints({
  // Endpointler tanımlanır
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user, // HTTP: POST Body
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = userApi;
