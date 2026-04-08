// rafce

const App = () => {
  let sayi = 42;

  console.log("RENDERED");

  const handleClick = () => {
    sayi = sayi + 1;
    console.log(sayi);
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        +
      </button>
      {sayi}
    </div>
  );
};

export default App;
