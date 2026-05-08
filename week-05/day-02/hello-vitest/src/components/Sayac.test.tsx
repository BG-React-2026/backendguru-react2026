import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Sayac from "./Sayac";

describe("Sayac", () => {
  it("Button'a tıklayınca sayaç artar", async () => {
    // 0. Tıklayacak kullanıcıyı oluşturuyoruz
    const user = userEvent.setup();
    // 1. Component'i render et (VDOM'a koy)
    render(<Sayac />);
    // 2. Tıklanılacak olan buton ekrandan alınır
    const button = screen.getByText(/arttır/i);
    // 3. Kullanıcı butona bassın
    await user.click(button);
    await user.click(button);
    // 4. Ekranda 43 yazısını görmeyi bekliyoruz
    expect(screen.getByText("44")).toBeInTheDocument();
    // Asenkron işleminiz varsa
    // expect(await screen.findByText("44")).toBeInTheDocument();
  });
});
