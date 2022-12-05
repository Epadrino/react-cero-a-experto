const persona = {
  nombre: "Eduardo",
  edad: 45,
  clave: "Epadrino",
};

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.2525,
      lng: -12.3232,
    },
  };
};

// al imprimir el latlng se vera como un objeto
const { nombreClave, anios, latlng } = useContext(persona);

console.log(nombreClave, anios, latlng);

// se puede destructurar para obtener los datos mas especificos
const { lat, lng } = latlng;

console.log(lat, lng);
