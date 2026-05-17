import { Navigate } from "react-router";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { user, login } = useAuth();

  if (user) {
    return <Navigate to={"/"} replace />;
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { name } = Object.fromEntries(formData.entries()) as { name: string };

    login({
      id: "42",
      name: name,
      role: "admin",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-dvh w-full items-center justify-center"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Adınız</label>
        <input name="name" type="text" className="input" placeholder="Adınız" />

        <button className="btn btn-neutral mt-4">Giriş</button>
      </fieldset>
    </form>
  );
};

export default Login;
