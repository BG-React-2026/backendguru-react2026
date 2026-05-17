// 1. User type oluştur export et
// 2. AuthContextValue (user, login(), logout())
// 3. AuthContext oluştur
// 4. AuthProvider oluştur (uygulamayı bununla sarıcaz)
// 5. useAuth (Context'i kullanan Custom Hook üret)

import React, { useEffect, useState } from "react";

// 1. User type
export type User = {
  id: string;
  name: string;
  role: "admin" | "user";
};

// Global'de neleri kullanacaksak onlar burada tutulur
// 2. AuthContextValue type
export type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

// 3. AuthContext
const AuthContext = React.createContext<AuthContextType | null>(null);

// 4. AuthProvider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // usss
  // State'in içinde ilk başlangıç değeri olarak localStorage'dan çektik
  // Kullanıcı henüz login değilse null döner
  const [user, setUser] = useState<User | null>(() => {
    const userStr = localStorage.getItem("USER");
    if (!userStr) return null;
    return JSON.parse(userStr);
  });

  // effect ile storage'a yazalım
  // uffs
  useEffect(() => {
    if (user) {
      localStorage.setItem("USER", JSON.stringify(user));
    } else {
      localStorage.removeItem("USER");
    }
  }, [user]);

  const value: AuthContextType = {
    user: user,
    login: (u: User) => setUser(u), // useEffect'i tetikleyecek
    logout: () => setUser(null), // useEffect'i tetikleyecek
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 5. useAuth hook
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("AuthContext sarmalanmadı");
  return context;
};
