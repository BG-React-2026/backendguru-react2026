import { Outlet } from "react-router";
import { useAuth } from "../features/auth/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-6">
      <div className="flex-1">
        <span className="text-lg font-semibold">📄 Doküman Paneli</span>
      </div>
      {user && (
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-medium">{user.name}</div>
            <div className="text-xs text-base-content/60">{user.role}</div>
          </div>
          <div className="avatar avatar-placeholder">
            <div className="bg-primary text-primary-content w-10 rounded-full">
              <span className="text-sm">
                {user.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            </div>
          </div>
          <button onClick={logout} className="btn btn-outline btn-sm">
            Çıkış
          </button>
        </div>
      )}
    </div>
  );
}

export function RootLayout() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <Outlet />
    </div>
  );
}
