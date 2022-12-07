import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>>", () => {
  test("should hacer match con el snapshot", () => {
    render(<FirstApp />);
  });
});
