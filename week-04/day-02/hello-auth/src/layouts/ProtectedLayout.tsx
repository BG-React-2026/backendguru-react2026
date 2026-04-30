import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  // LocalStorage ile token kontrolü
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
