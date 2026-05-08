import { useCallback, useState } from "react";

const App = () => {
  const [sayi, setSayi] = useState(42);

  const handleClick = useCallback(() => {
    console.log("Merhaba Dünya");
    setSayi(sayi + 1);
  }, [sayi]);

  console.log(handleClick);

  return <button onClick={handleClick}>Hello</button>;
};

export default App;
