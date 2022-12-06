describe("pruebas en <DemoComponent/>", () => {
  test("esta prueba no debe de fallar", () => {
    //1. inicialización
    const message1 = "Hola Mundo";

    //2. estímulo
    const message2 = message1.trim();

    //3. Obeservar el comportamiento... esperado
    expect(message1).toBe(message2);
  });
});
