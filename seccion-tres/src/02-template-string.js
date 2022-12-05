const nombre = "Eduardo";
const apellido = "Padrino";

// concatenado normal
const nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// concatenado moderno
const nombreCompletoConString = `
${nombre} 
${apellido}
${1 + 1}`;

console.log(nombreCompletoConString);

const getSaludo = (nombre) => {
  return "hola " + nombre;
};

// impresion en consola con string
console.log(`Este es un texto: ${getSaludo(nombre)}`);
