const App = () => {
  const ogrenciSayisi = 14;

  // Early return
  if(ogrenciSayisi > 13)
    return <h1>Yeni gelenler var</h1>

  return (
    <h1>Ogrenci sayisi değişmedi</h1>
  )
}

export default App