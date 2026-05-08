import { toplama } from "./toplama";

// Arrange, Act, Assert
describe("toplama", () => {
  it("iki sayıyı toplar", () => {
    // Arrange: değişkenler ayarlanır
    const sayi1 = 21;
    const sayi2 = 21;
    // Act: işlemler gerçekleştirilir
    const toplam = toplama(sayi1, sayi2);
    // Assert: Sonuç doğrulanır
    expect(toplam).toBe(42);
  });
});
