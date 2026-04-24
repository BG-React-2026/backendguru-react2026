import { useState } from "react";
import { useCreatePokemon, usePokemons } from "./hooks/usePokemons";

const App = () => {
  const { mutate: createPokemon } = useCreatePokemon();
  const { data: pokemons } = usePokemons();

  const [pokemonName, setPokemonName] = useState("");

  return (
    <div>
      <input
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={() => createPokemon({ name: pokemonName })}>Ekle</button>

      <ul>
        {pokemons?.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
