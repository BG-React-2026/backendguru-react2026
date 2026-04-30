import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Anasayfa</h1>} />
        <Route path="/pokemons" index element={<h1>Pokemonlar</h1>} />
        <Route path="/users" element={<h1>Kullanıcılar</h1>} />
        <Route
          path="/users/:id/products/:productId"
          element={<h1>Product id</h1>}
        />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
