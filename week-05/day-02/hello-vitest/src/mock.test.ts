import { vi } from "vitest";

describe("mock metot testi", () => {
  it("matcher'ları düzgün çalıştırır", () => {
    // Arrange
    const mockFun = vi.fn();
    // Act
    mockFun("Elma", 2);
    mockFun("Armut", 3);
    // Assert
    // Hiç çağrıldı mı?
    expect(mockFun).toHaveBeenCalled();
    // Kaç kere çağrıldı
    expect(mockFun).toHaveBeenCalledTimes(2);
    // Hangi parametrelerle çağrıldı
    expect(mockFun).toHaveBeenCalledWith("Elma", 2);
    expect(mockFun).toHaveBeenCalledWith("Armut", 3);
  });

  it("return eder", () => {
    // Arrange
    const mockFun = vi.fn();
    mockFun.mockReturnValue(42);
    // Act
    const sonuc = mockFun();
    // Assert
    expect(sonuc).toBe(42);
  });
});
