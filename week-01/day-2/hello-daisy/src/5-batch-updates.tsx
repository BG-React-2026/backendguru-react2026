import { useState } from "react";

// rafce
const App = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  const handleClick = () => {
    setSayi(sayi + 1);
    setSayi(sayi + 1);
    setSayi(sayi + 1);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        +
      </button>
      {sayi}
    </div>
  );
};

export default App;
