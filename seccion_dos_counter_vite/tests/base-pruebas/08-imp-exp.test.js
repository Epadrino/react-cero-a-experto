import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un héroe por ID", () => {
    const id = 2;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 2, name: "Spiderman", owner: "Marvel" });
  });

  test("getHeroeById debe retornar un héroe por ID que no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un héroe por Owner DC", () => {
    const Owner = "DC";
    const hero2 = getHeroesByOwner(Owner);
    expect(hero2.length).toBe(3);
    expect(hero2).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(hero2).toEqual(heroes.filter((heroe) => heroe.owner === Owner));
  });

  test("getHeroesByOwner debe retornar un héroe por Owner Marvel", () => {
    const Owner = "Marvel";
    const hero2 = getHeroesByOwner(Owner);
    expect(hero2.length).toBe(2);
    expect(hero2).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
    expect(hero2).toEqual(heroes.filter((heroe) => heroe.owner === Owner));
  });

  test("getHeroesByOwner debe retornar un héroe por Owner que no existe", () => {
    const Owner = "chanchito";
    const hero2 = getHeroesByOwner(Owner);
    expect(hero2).toEqual([]);
  });
});
