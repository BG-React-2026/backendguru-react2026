import { useState } from "react";

const Sayac = () => {
  const [sayi, setSayi] = useState(42);

  return (
    <div>
      <button onClick={() => setSayi(sayi + 1)}>Arttır</button>
      <h1>{sayi}</h1>
    </div>
  );
};

export default Sayac;
