import { toplama } from "./toplama";

// describe("özne")
describe("toplama", () => {
  // it("yüklem")
  // it("sums two numbers correctly")
  it("iki sayıyı toplar", () => {
    const toplam = toplama(21, 21);
    expect(toplam).toBe(42);
  });

  it("negatif sayıları doğru toplar", () => {
    expect(toplama(-32, -10)).toBe(-42);
  });
});
