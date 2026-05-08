import { useMemo, useState } from "react";
import Expensive, { type Person } from "./components/Expensive";

const App = () => {
  const [sayi, setSayi] = useState(42);
  const [kisi, setKisi] = useState<Person>({
    name: "Isminiz",
  });
  const person = useMemo(() => ({ name: "Zafer" }), []);
  return (
    <>
      <button onClick={() => setSayi(sayi + 1)}>{sayi}</button>
      <button onClick={() => setKisi({ ...kisi, name: kisi.name + 1 })}>
        {kisi.name}
      </button>
      <Expensive person={person} />
    </>
  );
};

export default App;
