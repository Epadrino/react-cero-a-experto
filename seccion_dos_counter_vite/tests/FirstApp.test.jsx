import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>>", () => {
  // test("should hacer match con el snapshot", () => {
  //   const title = "hola, Soy Goku";
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });
  test("should de mostrar el titulo en un h1", () => {
    const title = "hola, Soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });
  test("should aparecer el subtitulo enviado por props", () => {
    const title = "Hola soy Goku";
    const subTitle = "soy un sbtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
