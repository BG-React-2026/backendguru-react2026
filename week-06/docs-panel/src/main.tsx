import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/routes";
import { AuthProvider } from "./features/auth/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
