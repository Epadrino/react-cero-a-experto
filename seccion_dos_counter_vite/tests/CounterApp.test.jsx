import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp/>>", () => {
  const value = 100;

  test("should de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("should aparecer el mensaje '100'", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
  });

  test("should de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    // screen.debug();
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("should de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    // screen.debug();
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("should de funsionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(value)).toBeTruthy();
  });
});
