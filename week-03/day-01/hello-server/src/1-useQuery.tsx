import { usePokemons } from "./hooks/usePokemons";

// rafce
const App = () => {
  const { data: pokemons } = usePokemons();

  return (
    <ul>
      {pokemons?.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default App;
