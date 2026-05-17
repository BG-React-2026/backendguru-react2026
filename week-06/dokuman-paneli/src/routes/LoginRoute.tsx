import { Navigate } from "react-router";
import { useAuth } from "../features/auth/AuthContext";
import { LoginForm } from "../features/auth/LoginForm";

export function LoginRoute() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <LoginForm />;
}
