const activo = true;

// Primera forma de hacer un operador ternario
let mensaje = "";

if (activo) {
  mensaje = "activo";
} else {
  mensaje = "inactivo";
}
console.log(mensaje);

// Segunda forma de hacer un operador ternario
// puedes dar un resultado o simplemente colocar null
const mensaje2 = activo ? "activo2" : "inactivo";
// ejem (   const mensaje2 = activo ? "activo" : null;   )
console.log(mensaje2);

// Tercera forma de hacer un operador ternario
const mensaje3 = activo && "activo3";

console.log(mensaje3);
