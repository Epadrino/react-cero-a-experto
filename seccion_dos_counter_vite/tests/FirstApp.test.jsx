import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>>", () => {
  test("should hacer match con el snapshot", () => {
    const title = "hola, Soy Goku";
    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });
});
