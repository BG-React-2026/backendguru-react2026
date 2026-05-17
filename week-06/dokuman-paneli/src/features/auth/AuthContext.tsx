import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type User = {
  id: string;
  name: string;
  role: "admin" | "user";
};

type AuthContextValue = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const STORAGE_KEY = "dp:auth";

function readStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as User;
    if (!parsed?.id || !parsed?.name) return null;
    return parsed;
  } catch {
    return null;
  }
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => readStoredUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      login: (u: User) => setUser(u),
      logout: () => setUser(null),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth, AuthProvider içinde kullanılmalı");
  return ctx;
}
