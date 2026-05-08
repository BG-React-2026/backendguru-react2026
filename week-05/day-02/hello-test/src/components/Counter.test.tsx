import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("renders initial count", () => {
    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments count when button clicked", async () => {
    render(<Counter />);

    const button = screen.getByRole("button", {
      name: /increment/i,
    });

    await userEvent.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
