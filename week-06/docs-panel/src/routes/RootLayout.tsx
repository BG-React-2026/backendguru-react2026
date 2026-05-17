import { Outlet } from "react-router";
import { useAuth } from "../features/auth/AuthContext";

const RootLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Markanız</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button>{user?.name}</button>
            </li>
            <li>
              <button onClick={logout}>Çıkış Yap</button>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
