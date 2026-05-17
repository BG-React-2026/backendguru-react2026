import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardRoute } from "./DashboardRoute";
import { LoginRoute } from "./LoginRoute";
import { NotFoundRoute } from "./NotFoundRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { RootLayout } from "./RootLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<LoginRoute />} />
          <Route element={<ProtectedRoute />}>
            <Route index element={<DashboardRoute />} />
          </Route>
          <Route path="*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
