import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            BackendGuru
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "menu-active" : "")}
                end
              >
                Kullanıcılar
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "menu-active" : "")}
                to="/users/3"
                end
              >
                Kullanıcı detayı
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
