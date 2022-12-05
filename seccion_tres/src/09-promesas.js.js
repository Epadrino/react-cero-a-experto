import { getHeroe2ById } from "./bases/08-Exportaciones";

// elboracion de una promesa

const promesa = new Promise((resolve, reject) => {
  const heroe = getHeroe2ById(2);
  setTimeout(() => {
    resolve(heroe);
  }, 2000);
});

promesa.then((heroe) => {
  console.log("Then de la promesa, 2 segundos despues", heroe);
});

// elboracion de una promesa con parametros
// se le agrego el (new Error) para el reject segun referencia
// https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroe2ById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject(new Error("Héroe no Disponible"));
      }
    }, 2000);
  });
};

// se puede inviar la respuesta asi
getHeroeByIdAsync(10)
  .then((heroe) => console.log("heroe", heroe))
  .catch((err) => console.warn(err));

// o asi ya que el argumento a recibir es la respuesta de la promesa
getHeroeByIdAsync(3).then(console.log).catch(console.warn);
