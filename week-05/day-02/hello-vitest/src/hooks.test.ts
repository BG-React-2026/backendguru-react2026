// Hook metotlar aşağıdaki gibi her test öncesi/sonrasında çalışırlar
// Her test birbirinden bağımsız olmalı
describe("Kullanıcı auth servisi", () => {
  // Sadece 1 kez çalışır
  // Orn: DB'yi ayağa kaldırmak
  beforeAll(() => {});
  // Her it testi çalışmadan önce çalışır
  // Orn: Mock oluşturduysak onları her test öncesinde sıfırlayabiliriz
  beforeEach(() => {});

  // Her test sonrası çalışan metotlar
  // Orn: DB'de tabloya yazdıysak, resetlemek için kullanabiliriz
  afterEach(() => {});

  // Sadece 1 kez çalışır
  // Orn: DB'yi kapatma
  afterAll(() => {});

  it("başarılı login", () => {});
});
