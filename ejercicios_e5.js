// Arreglos en JavaScript

// Arreglo con diferentes tipos de elementos
let arreglo1 = [1, 2, 3, "texto", true];

// Arreglo usando el constructor Array
let arreglo2 = new Array(1, 2, 3);

// Arreglo vacío
let arreglo3 = [];

// Métodos de los arreglos

// push()
let numeros = [1, 2, 3];
let longitudPush = numeros.push(4, 5); // Añade elementos
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitudPush); // 5

// unshift()
let letras = ['b', 'c'];
let longitudUnshift = letras.unshift('a'); // Añade elementos al inicio
console.log(letras); // ['a', 'b', 'c']
console.log(longitudUnshift); // 3

// pop()
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop(); // Elimina el último elemento
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

// shift()
let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift(); // Elimina el primer elemento
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

// indexOf()
let numerosArray = [10, 20, 30, 20, 40];
let indice = numerosArray.indexOf(20); // Busca el índice del elemento
let indiceDesde2 = numerosArray.indexOf(20, 2); // Busca desde un índice específico
console.log(indice); // 1
console.log(indiceDesde2); // 3

// length
let arregloLength = [1, 2, 3];
console.log(arregloLength.length); // 3
arregloLength.length = 1; // Trunca a [1]
arregloLength.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]

// sort()
let numerosSort = [3, 1, 4, 2];
numerosSort.sort((a, b) => a - b); // Orden ascendente
console.log(numerosSort); // [1, 2, 3, 4]

// join()
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); // Convierte en cadena
console.log(texto); // 'hola mundo'

// concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]); // Une arreglos
console.log(combinado); // [1, 2, 3, 4, 5]

// forEach()
let coloresForEach = ['rojo', 'verde', 'azul'];
coloresForEach.forEach(color => console.log(color)); // Imprime: rojo, verde, azul

// map()
let numerosMap = [1, 2, 3];
let dobles = numerosMap.map(x => x * 2); // Crea un nuevo arreglo
console.log(dobles); // [2, 4, 6]

// filter()
let numerosFilter = [1, 2, 3, 4];
let pares = numerosFilter.filter(x => x % 2 === 0); // Filtra elementos
console.log(pares); // [2, 4]

// reduce()
let numerosReduce = [1, 2, 3, 4];
let suma = numerosReduce.reduce((acc, curr) => acc + curr, 0); // Reduce a un solo valor
console.log(suma); // 10

// some()
let numerosSome = [1, 2, 3, 4];
let hayPares = numerosSome.some(x => x % 2 === 0); // Verifica condición
console.log(hayPares); // true

// every()
let numerosEvery = [2, 4, 6, 8];
let todosPares = numerosEvery.every(x => x % 2 === 0); // Verifica condición para todos
console.log(todosPares); // true

// find()
let numerosFind = [1, 2, 3, 4];
let encontrado = numerosFind.find(x => x > 2); // Encuentra primer elemento que cumple condición
console.log(encontrado); // 3

// findIndex()
let numerosFindIndex = [1, 2, 3, 4];
let indiceFind = numerosFindIndex.findIndex(x => x > 2); // Encuentra índice del primer elemento que cumple condición
console.log(indiceFind); // 2

// entries()
let coloresEntries = ['rojo', 'verde', 'azul'];
let iteradorEntries = coloresEntries.entries(); // Devuelve iterador de índices y valores
console.log([...iteradorEntries]); // [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

// keys()
let coloresKeys = ['rojo', 'verde', 'azul'];
let iteradorKeys = coloresKeys.keys(); // Devuelve iterador de índices
console.log([...iteradorKeys]); // [0, 1, 2]

// values()
let coloresValues = ['rojo', 'verde', 'azul'];
let iteradorValues = coloresValues.values(); // Devuelve iterador de valores
console.log([...iteradorValues]); // ['rojo', 'verde', 'azul']


let arreglo4 = new Array(1,2,3);

let Arreglo4 = new []

let arreglo5 = [{},{},{}];

let arreglo6 = [{"nombre": "Kristing"},{},{}]

let arreglo7 = [[{},{}],["A",1,2,3],[true,false]];

