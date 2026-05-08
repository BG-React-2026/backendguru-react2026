import React, { useMemo, useState } from "react";
import { products } from "../data/products";

const Products = () => {
  // usss
  const [metin, setMetin] = useState("");

  const filtreliUrunler = useMemo(() => {
    console.log("Filtreleniyor...");
    return products.filter((p) => {
      return p.name.toLowerCase().includes(metin.toLowerCase());
    });
  }, [metin, products]);

  console.log("RENDERED: Products");

  return (
    <div>
      <input value={metin} onChange={(e) => setMetin(e.target.value)} />
      <ul>
        {filtreliUrunler.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
