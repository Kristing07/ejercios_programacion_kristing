const persona = {
nombre: "Kristing",
edad: 28,
direccion: {
ciudad: "Madrid",
codigoPostal: 28001
},
hobbies: ["leer", "correr", "pintar"]
};

// a) Función flecha que muestra el nombre de la persona
const mostrarNombre = (obj) => console.log("Nombre:", obj.nombre);

// b) Función flecha que muestra la edad de la persona
const mostrarEdad = (obj) => console.log("Edad:", obj.edad);

// c) Función flecha que muestra la ciudad donde vive la persona
const mostrarCiudad = (obj) => console.log("Ciudad:", obj.direccion.ciudad);

// d) Función flecha que muestra el código postal usando corchetes
const mostrarCodigoPostal = (obj) => console.log("Código Postal:", obj["direccion"]["codigoPostal"]);

// e) Función flecha que muestra el segundo hobby de la persona
const mostrarSegundoHobby = (obj) => console.log("Segundo hobby:", obj.hobbies[1]);

// --- Ejecución de todas las funciones ---
mostrarNombre(persona);
mostrarEdad(persona);
mostrarCiudad(persona);
mostrarCodigoPostal(persona);
mostrarSegundoHobby(persona);