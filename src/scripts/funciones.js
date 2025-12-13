/* Funcion declara */
let acompañmiento = "?" /* global */
console.log(saludar("Hola mundo"))

function saludar(saludo) {
    let acompañmiento = "!" /* local */
    console.log(acompañmiento)
    for (let i = 0; i < 5; i++) {
        console.log(i)
        if (i === 2) return saludo + acompañmiento
    }
}

/* let saludado = saludar("Hola")
console.log(saludado) */

/* Expresion funcion */

const saludado = function (saludo) {
    let acompañmiento = "*" /* local */
    for (let i = 0; i < 5; i++) {
        console.log(i)
        if (i === 2) return saludo + acompañmiento
    }
}
console.log(saludado("Hola Clase"))

const sumar = (a, b) => {
    let resultado = a + b
    console.log(resultado)
}

sumar(2, 3)

function operacion(a,b, callback /* una funcion */) {
    return callback(a,b)
}

function sumarr(x,y) {return x+y}
function restar(x,y) {return x-y}

console.log(operacion(5,3, sumarr))  /* se queda esperando */
console.log(operacion(5,3, restar))


function factorial(n) {
    if (n === 0) return 1
    return n * factorial(n-1)
}

console.log(factorial(5)) /* 5 *4 *3 *2 *1 */