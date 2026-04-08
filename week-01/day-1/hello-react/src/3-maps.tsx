const App = () => {
  const teknolojiler = ["React", "Vite", "TypeScript"];

  return (
    <div>
      <h1>Eğitimdeki teknolojilerimiz</h1>
      {teknolojiler.map((t) => (
        <li>{t}</li>
      ))}
    </div>
  );
};

export default App;
