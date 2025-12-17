/* 
Calculador con fuciones y validaciones
sumar
restar
mutiplicar
dividir
mostrar resultado
*/

/* function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}
function multiplicacion(a, b) {
    return a * b
}
function dividir(a, b) {
    return b === 0 ? "Erro: division entre cero" : a / b
}

function calculadora() {
    let a = Number(prompt("Primer numero: "))
    let b = Number(prompt("Segundo numero: "))
    let op = prompt("Operacion (+, -, *, /,)")

    if (op === "+") {
        suma(a, b)
    } else if (op === "-") {
        resta(a, b)
    } else if (op === "*") {
        multiplicacion(a, b)
    } else if (op === "/") {
        dividir(a, b)
    } else {

    }
    let seguir = prompt("Desea hacer otra operacion Si / No").trim().toLowerCase()

    if (seguir === "si") { calculadora() }

}

console.log("Resultado: ", calculadora()) */


/* Generador de Contraseñas
Generar una contraseña aleatoria
Permitir elegir 
    longitud
    si incluye numeros
    si inclute mayusculas
*/

function letraMin() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26))
}
function letraMay() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}

function numero() {
    return Math.floor(Math.random() * 10)
}

function generarPass(longitud, usarNum, usarMay) {
    let pass = ''

    for (let i = 0; i < longitud; i++) {
        let opciones = [letraMin]
        if (usarNum) opciones.push(numero)
        if (usarMay) opciones.push(letraMay)

        let r = Math.floor(Math.random() * opciones.length)
        pass += opciones[r]()
    }
    return pass
}

let len = Number(prompt("Longitud: "))
let num = prompt("Incluir numeros? si no").toLowerCase() === "si"
let may = prompt("Incluir mayusculas? si no").toLowerCase() === "si"

console.log("Contraseña Generada: ", generarPass(len, num, may))