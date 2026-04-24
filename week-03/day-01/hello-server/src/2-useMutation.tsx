import { useState } from "react";
import { useCreatePokemon } from "./hooks/usePokemons";

// rafce
const App = () => {
  const { mutate: createPokemon } = useCreatePokemon();

  // usss
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div>
      <input
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={() => createPokemon({ name: pokemonName })}>Ekle</button>
    </div>
  );
};

export default App;
