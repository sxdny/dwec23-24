// clases ES6 -> OOP en JavaScript - class

// crear una nueva clase (como en Java)
class Persona {

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log("Hola, me llamo " + this.nombre);
    }
}

// instanciados
const Sidney = new Persona("Sidney");

console.log(Sidney);

Sidney.saludar()

// Concepto de herencia

class Empleado extends Persona {

    constructor(nombre, salario) {

        super(nombre) // va lo primero        
        this.salario = salario;

    }

    trabajar() {
        console.log("Hola, soy " + this.nombre + " y estoy y trabajando");
    }
}

const Paco = new Empleado("Paco", 7600)

console.log(Paco)

Paco.saludar()
Paco.trabajar()

// Simbolos

/*
    Son una nueva clase de datos introducidos por ES6. Son valores únicos e inmutables.
    Se pueden utilizar como identificadores de propiedades de objetos.
*/

const id = Symbol("id")

const individuo = {
    nombre: "Joan",
    [id]: 1
};


console.log(individuo)

// Iteradores - Son objetos que implementan el protocolo de iteración en JavaScript
// Permiten recorrer y acceder a los elementos de una colección uno a uno.

const numeros = [1, 2, 3, 4, 5, 6]

const iterador = numeros[Symbol.iterator]()

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); // done+

// SET -> Permite almacenar valores únicos de cualquier tipo. No permite duplicados
// y ofrece métodos para agregar, eliminar y verificar la existencia del elemento.

const coleccion = new Set()

coleccion.add(1);
coleccion.add(2);
coleccion.add(3);
coleccion.add(3);

console.log(coleccion.has(2))
coleccion.delete(2) // eliminar elemento
console.log(coleccion.has(2))
console.log(coleccion.size);
console.log(coleccion)

const iteradorDeNumeros = coleccion[Symbol.iterator]()

console.log(iteradorDeNumeros.next())
console.log(iteradorDeNumeros.next())
console.log(iteradorDeNumeros.next()) // done

// Map -> Permite almacenar pares clave-valor, donde cada clave es única. Permite
// operaciones de búsqueda, inserción y eliminación de elementos.

const mapa = new Map();

mapa.set("edad", 33); // pares clave-valor

mapa.set("profesion", "Desarrollador");

console.log(mapa);

console.log(mapa.get("edad"))

console.log(mapa.has("edad")) // devuelve boolean

mapa.delete("edad")

console.log(mapa.get("edad"));

console.log(mapa.size)

console.table(mapa)

let hoy = new Date("2023-06-06")

console.log(hoy)

console.log(hoy.getFullYear(), hoy.getMonth());