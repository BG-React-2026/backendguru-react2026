import { BrowserRouter, Route } from "react-router";
import { Routes as RRoutes } from "react-router";
import Login from "../features/auth/Login";
import RootLayout from "./RootLayout";
import Todos from "../features/todos/Todos";

const Routes = () => {
  return (
    <BrowserRouter>
      <RRoutes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Todos />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </RRoutes>
    </BrowserRouter>
  );
};

export default Routes;
