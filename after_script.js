// High Order Functions || Funciones de Orden Superior

/* Son funciones que reciben otra funcion por parameto o que retornan una función*/

/* Caso donde retorna una funcion */
function mayorQue(n) {
  return (m) => m > n;
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12)); //  true
console.log(mayorQueDiez(8)); //  false

/* Caso donde recibe una función por parametro */

function asignarOperacion(op) {
  if (op == "sumar") {
    return function(a, b){
     a + b;
    }    
  } else if (op == "restar") {
    return (a, b) => a - b;
  }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(4, 6)); //  10
console.log(resta(5, 3)); //  2










/* Metodos de busqueda y transformación */


/* forEach() */


// Itera sobre el array de referencia y por cada elemento del array ejecuta la función que enviemos por 
// parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:

const numeros = [1, 2, 3, 4, 5, 6]
 
numeros.forEach( (numero)=> {
    console.log(numero)
} )


/*  Find   */

/*  El método find() recibe una función de comparación por parámetro (es decir, una función que captura el elemento que se está recorriendo y retorne true o false según la comparación que ejecuta). El método retorna el primer elemento del array que cumpla con esa condición:
 */


const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]
 
const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")
 
console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined


/* Filter */

/* El método filter() recibe, al igual que el find, una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. En caso de no haber coincidencias, retornará un array vacío:
 */

const cursos2 = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]
 
const resultado3 = cursos2.filter((curso) => curso.nombre.includes('JS'))
const resultado4 = cursos2.filter((el) => el.precio < 14000)
 
console.log(resultado3)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */
 
console.log(resultado4) // []


/* Some */

/* El método some() funciona igual que el find(), recibiendo una función de búsqueda, con la diferencia que en vez de retornar el elemento encontrado, el método some retorna true o false según el resultado de la iteración de búsqueda:
 */

console.log( cursos2.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos2.some((el) => el.nombre == "VueJS")) 
// false
 
/* Map */

/* El método map() se utiliza para crear un nuevo array con todos los elementos del array original, transformados según las operaciones de la función enviada por parámetro. El nuevo array obtenido tiene la misma cantidad de elementos que el array original, pero los elementos que se almacenan son el return de la función enviada por parámetro: */

const cursos3 = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]
 
const nombres = cursos3.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

/* En este ejemplo los elementos del nuevo array son el return de la función enviada al map: la función retorna la propiedad nombre de cada elemento y eso es lo que se almacena en el nuevo array nombres.
Este método se utiliza mucho para transformación de arrays, ya que genera un nuevo array recorriendo el primero. Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una copia de los elementos con el precio modificado: */

const actualizado = cursos3.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})
 
console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */


/* REDUCE */

/* El método reduce() nos permite obtener un único valor tras iterar sobre el array. Es decir, funciona como un método que resume el array a un único valor de retorno. Se utiliza mucho cuando, por ejemplo, queremos acumular la suma de alguna propiedad de los elementos almacenados, u obtener algún resultado general sobre todo el array. 
A diferencia de los métodos anteriores, el método reduce recibe dos parámetros. El primero es la función que ordena qué queremos resumir del array, y recibe primero un parámetro que funciona como acumulador y el segundo es el elemento del array que iteramos.  */

const numeros2 = [1, 2, 3, 4, 5, 6]

const total = numeros2.reduce((acumulador, elemento) => acumulador + elemento, 0)
 
console.log(total) // 21

/* Con esto podría, por ejemplo, pensando en un simulacro de compra, sumar el precio de todos los productos elegidos:
 */


const carrito = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]
 
const total2 = carrito.reduce((acc, el) => acc + el.precio, 0)
console.log(total2) // 66250



/* SORT */

/* El método sort() nos permite reordenar un array según un criterio que definamos. Este método es destructivo, es decir que modifica el array sobre el cual se llama. El método recibe una función de comparación por parámetro que recibe dos elementos del array a la vez. La función debe retornar un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.
Para ordenar números, basta con restar uno al otro, y el orden indica si será ordenado de forma ascendente o descendente:
 */

const numeros3 = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]





/* Ejemplo de agregar un curso al carrito */

// let carrito3 = []
// let comprar = prompt("Ingrese el nombre del curso que va a adquirir")
// carrito3.push(comprar) 

// console.log(carrito3) // ["Javascript"] 
 

let titulo = document.getElementById("Titulo")