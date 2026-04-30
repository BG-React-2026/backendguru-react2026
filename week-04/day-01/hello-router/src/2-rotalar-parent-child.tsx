import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Anasayfa</h1>} />
        <Route path="/users">
          <Route path="" element={<h1>Kullanıcılar</h1>} />
          <Route path=":id">
            <Route path="" element={<h1>Ürünler</h1>} />
            <Route path="products">
              <Route path="" element={<h1>Ürünler</h1>} />
              <Route path=":id" element={<h1>Ürün id</h1>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
