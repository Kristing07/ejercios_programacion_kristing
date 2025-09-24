// Arreglo de números
let numeros = [5, 2, 9, 1, 7];

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

// Orden descendente
numeros.sort((a, b) => b - a); 
console.log(numeros); // [9, 7, 5, 2, 1]

// Arreglo de cadenas
let frutas = ["banana", "manzana", "naranja", "uva"];
frutas.sort(); // Orden alfabético por defecto
console.log(frutas); // ["banana", "manzana", "naranja", "uva"]

// Orden alfabético inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas); // ["uva", "naranja", "manzana", "banana"]


let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 }
];

// Ordenar por edad (ascendente)
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);
// Output: [{ nombre: "Pedro", edad: 20 }, { nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 30 }]

// Ordenar por nombre (alfabético)
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);
// Output: [{ nombre: "Ana", edad: 30 }, { nombre: "Juan", edad: 25 }, { nombre: "Pedro", edad: 20 }]

let numero = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras); // ["javascript", "mundo", "hola"]

let calificaciones = [
    {estudiante: "Angel", asigatura: "Historia", calificacion: 100,
    estudiante: "Xiomara", asigatura: "MAtematica", calificacion: 40,
    estudiante: "Martin", asigatura: "Lengua", calificacion: 20,
    estudiante: "Milagro", asigatura: "Sociales", calificacion: 50,
     estudiante: "Darling", asigatura: "TAC", calificacion: 70,
    }
];


//orden inverso alfabetico por asignatura
calificaciones.sort((a,b) => b.asigatura.localeCompare(a.asigatura));
console.log(calificaciones);

// orden decendente de calificaciones

calificaciones.sort((a,b) => b.calificacion - a.calificacion);
console.log(calificaciones);