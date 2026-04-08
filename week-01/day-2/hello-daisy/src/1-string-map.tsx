// rafce
const App = () => {
  const names = ["Hızır", "Cengiz", "Enes"];

  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default App;
