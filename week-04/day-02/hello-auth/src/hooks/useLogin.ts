import { useMutation } from "@tanstack/react-query";
import { api } from "../api/api";

export type LoginResp = {
  token: string;
  user: User;
};

type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
};

export type LoginPayload = {
  username: string;
  email: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (formData: LoginPayload) =>
      api.post("/auth/login", formData).then((resp) => resp.data),
  });
};
