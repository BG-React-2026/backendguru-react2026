import { useState } from "react";

// rafce
const App = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  const handleClick = () => {
    setSayi((prev) => prev + 1);
    setSayi((prev) => prev + 1);
    setSayi((prev) => prev + 1);
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
