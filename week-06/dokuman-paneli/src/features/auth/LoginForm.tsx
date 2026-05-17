import { useState, type FormEvent } from "react";
import { useAuth } from "./AuthContext";

export function LoginForm() {
  const { login } = useAuth();
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    login({
      id: crypto.randomUUID(),
      name: name.trim(),
      role: "admin",
    });
  };

  return (
    <div className="hero min-h-[calc(100vh-4rem)]">
      <div className="hero-content w-full max-w-sm">
        <div className="card bg-base-100 w-full shadow-xl">
          <form onSubmit={handleSubmit} className="card-body gap-4">
            <h2 className="card-title">Giriş yap</h2>
            <label className="form-control">
              <span className="label-text mb-1">Adınız</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="örn. Ayşe Yılmaz"
                className="input input-bordered w-full"
                autoFocus
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!name.trim()}
            >
              Giriş
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
