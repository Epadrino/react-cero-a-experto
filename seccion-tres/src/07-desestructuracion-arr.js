// forma para desestructurar el arreglo de personajes
const personajes = ["Goku", "Vegueta", "Trinks"];

const [p1, p2, p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

// funcion con un arreglo
const retornarArreglo = () => {
  return ["ABC, 123"];
};

console.log(retornarArreglo());
// Desestructuracion del arreglo de la funcion
const [letras, numero] = retornarArreglo();

console.log(letras, numero);

// useState

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [valor, setNombre] = useState(p2);

console.log(valor);
setNombre();
