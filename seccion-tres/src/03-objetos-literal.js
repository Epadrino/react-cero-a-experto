const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    codigoPostal: 102,
    lat: 14.3232,
    lng: 34.9292,
  },
};

// si se usa la propiedad table se podra apreciar el objeto
// de una manera mas comoda { console.table( persona ) }

console.log(persona);

// la forma correcta de crear un clon de un objeto es utilizando los
// tres puntos suspensivos ( ... )
const persona2 = { ...persona };

persona2.nombre = "Eduardo";

console.log(persona2);
