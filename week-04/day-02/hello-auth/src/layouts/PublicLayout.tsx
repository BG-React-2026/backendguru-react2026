import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
    </>
  );
};

export default PublicLayout;
