const App = () => {
  const sayi = 42;
  const isim = "Zafer";
  const tarih = new Date().toLocaleDateString("tr-TR");

  return (
    <div>
      <h1>Sayı: {sayi}</h1>
      <h1>Isim: {isim}</h1>
      <h1>Tarih: {tarih}</h1>
    </div>
  );
};

export default App;
