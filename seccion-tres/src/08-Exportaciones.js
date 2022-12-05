import { heroes } from "../data/heroes";

// funsion completa
/*
const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
};
*/
// console.log(getHeroeById(1));

// funsion resumida
export const getHeroe2ById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroe2ById(2));

// tarea

export const getHeroe2ByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroe2ByOwner("DC"));
