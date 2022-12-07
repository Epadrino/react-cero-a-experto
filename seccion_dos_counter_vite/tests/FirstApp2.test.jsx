import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>>", () => {
  const title = "Hola, Soy Goku";
  const subTitle = "soy un sbtitulo";

  test("should de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test("should aparecer el mensaje 'Hola, Soy Goku'", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  test("should de montrar el title en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
  test("should de montrar el subtitulo en las props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
