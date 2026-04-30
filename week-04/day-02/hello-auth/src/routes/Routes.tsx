import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RRoutes,
} from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <RRoutes>
        {/* Ilk açılan sayfa login olsun */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Public Rotalar */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
        {/* Protected Rotalar */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </RRoutes>
    </BrowserRouter>
  );
};

export default Routes;
