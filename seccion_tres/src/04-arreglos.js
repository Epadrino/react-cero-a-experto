// creacion de un arreglo ordinario
const arreglo = [1, 2, 3, 4];

// creacion de un nuevo arreglo clonando el primero
// y agregando mas datos
const arreglo2 = [...arreglo, 5];

// creacion de un nuevo arreglo con el metodo ( .map )
const arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
