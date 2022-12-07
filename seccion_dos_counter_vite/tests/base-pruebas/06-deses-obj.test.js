import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Prueba de desestructuracion de obj", () => {
  test("usContext debe retornar un objeto", () => {
    const clave = 123;
    const edad = 20;

    const user = usContext({ clave, edad });

    expect(user).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
