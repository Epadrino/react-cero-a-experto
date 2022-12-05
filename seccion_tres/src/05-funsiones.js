const nombre = "Eduardo Padrino";
const usuario = "El Primito Guapeton";

// funcion ordinaria (evitar este tipo de funsiones
// para evitar sobre-escribirla con una variable)

function saludar(nombre) {
  return `hola, ${nombre}`;
}

console.log(saludar(nombre));

// funsiones de flecha o landan (recomendadas)

const saludarRecomendado = (nombre) => {
  return `hola, ${nombre}`;
};

console.log(saludarRecomendado(nombre));

// funsiones de flecha o landan simplificada (recomendadas)

const saludarRecomendado2 = (nombre) => `hola, ${nombre}`;

console.log(saludarRecomendado2(nombre));

// resolucion de tarea

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo(usuario);
console.log(usuarioActivo);
