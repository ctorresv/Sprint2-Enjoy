/* 
Sistema de registro de estudiantes
El programa debe pedir nombres de estudiantes hasta que el usuario igrese FIN
Guardarlos en un vector
Mostar:
    Total de estudiantes
    Estuandtes en orden alfabetico
    Estudiantes cuyo nombre cominece con un vocal
*/

/* let estudiantes = []
let nombre

while (true) {
    nombre = prompt("Ingrese nombre del estudiante o FIN para terminar")
    if (nombre === null) {
        continue
    }

    if (nombre == "FIN") {
        break
    }

    if (nombre.length === 0) {
        continue
    }
    estudiantes.push(nombre);

}

let order = [...estudiantes].sort();
let vocales = estudiantes.filter(n => /^[aeiou]/i.test(n))

console.log("Totla: ", estudiantes.length)
console.log("Alfabeticamente: ", order)
console.log("Con vocal: ", vocales) */


/* Filtro de palabras prohibidas
El programa debe reemplazar cada palabra prohibida por ***
mostrar la frase filtrada
*/

/* let prohibidas = ["tonto", "feo", "malo"]
let frase = prompt("Ingresa una frase")

let palabras = frase.split(" ")
Esto es un program FEO
let filtrada = palabras.map(p => {
    let palabraLimpia = p.toLowerCase()
    return prohibidas.includes(palabraLimpia) ? "***" : p
})

let result = filtrada.join(" ")
console.log("Origal: ", frase)
console.log("Filtrada: ", result) */
import saludar from "./funciones.js"

saludar("Esto esta en otro lado")

let nombre = "JavaScript"
console.log(nombre.length)
console.log(nombre.toLowerCase) /* minusculas */
console.log(nombre.toUpperCase) /*  mayusculas */
console.log("programar".includes("gram"))/* Booleano */
console.log("banana".indexOf("a"))
console.log("banana".lastIndexOf("a"))
console.log(" hola ".trim())
console.log(nombre.slice(0, 4))
console.log(nombre.slice(-6))
console.log(nombre.substring(4, 10))
console.log("perro perro".replace("perro", "gato"))
console.log("perro perro".replaceAll("perro", "gato"))
console.log("a,b,c,d,x".replaceAll(",", " "))
console.log("ja".repeat(3))
console.log("a,b,c,d,x".split(","))
console.log("Hola".concat(" ", "Mundo"))
let hola = "hola"
let mundo = " mundo"
console.log(hola + mundo)