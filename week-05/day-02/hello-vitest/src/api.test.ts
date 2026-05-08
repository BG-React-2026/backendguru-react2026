import { vi } from "vitest";
import { getUsers } from "./api";

describe("api", () => {
  beforeAll(() => {
    vi.mock("./api", () => ({
      getUsers: vi.fn().mockResolvedValue([
        {
          id: 1,
          name: "Zafer",
        },
        {
          id: 2,
          name: "Hızır",
        },
      ]),
    }));
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("2 tane kullanıcı döner", async () => {
    expect(await getUsers()).toHaveLength(2);
  });
});
