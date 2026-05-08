import { vi } from "vitest";
import { hello } from "./hello";

// desc
describe("hello", () => {
  // Her test öncesi Fake timer kullan
  // Daha sonra bu fake timer'ı set edicez
  beforeEach(() => {
    vi.useFakeTimers();
  });

  // Her test işlemi sonrası gerçek timer'a geri dön
  // Sızıntı olmasın testlerde
  afterEach(() => {
    vi.useRealTimers();
  });

  it("sabah 9 ise günaydın yazar", () => {
    vi.setSystemTime(new Date("2026-05-06T09:00:00"));
    expect(hello()).toBe("Günaydın");
  });
});
