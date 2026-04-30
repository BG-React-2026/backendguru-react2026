import { useNavigate } from "react-router";
import { useLogin, type LoginPayload, type LoginResp } from "../hooks/useLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: login } = useLogin();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { username, email, password } = Object.fromEntries(
      formData.entries(),
    ) as LoginPayload;

    login({ username, email, password }).then((loginResp: LoginResp) => {
      localStorage.setItem("token", loginResp.token);
      navigate("/dashboard");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Username</label>
        <input
          type="text"
          className="input"
          placeholder="Username"
          name="username"
          defaultValue="zafer"
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email"
          defaultValue="zaferr@gmail.com"
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          name="password"
          defaultValue="123456"
        />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
  );
};

export default LoginPage;
