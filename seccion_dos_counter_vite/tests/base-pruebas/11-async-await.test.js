import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-awet.js", () => {
  test("should getImagen retornar n URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
