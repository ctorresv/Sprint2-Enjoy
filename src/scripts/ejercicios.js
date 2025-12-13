/* Declarar dos numeros y mostrar cual es mayor */

/* let num1 = 30
let num2 = 22

if (num1 > num2) {
    console.log(num1, "el numero1 Es mayor")
} else {
    console.log(num2, "el numero2 Es mayor")
} */


/* Dado un numero, decir si es par o impar */


/* let num = -10

if (num % 2 !== 0) {
    console.log(num, "Es impar")
} else {
    console.log(num, "Es par")
} */


/* Determinar si una persian puede entrar a un bar
Deber tener al menos  18 años y tener suficiente dinero (minimo $20) */

/* let edad = 17
let dinero = 25

if (edad >= 18) {
    if (dinero >= 20) {
        console.log("Tienes la edad: ", edad, "Tienes dinero: ", dinero)
    }
} else {
    console.log("No puede entrar")
} */


/* Imprime todos los numero pares del 2 al 20 */

/* for (let i = 10; i >= 1; i--) {
    console.log("Numero par: ", i)
} */

/* Imprimir los numeros del 1 al 30 pero:
Si es multiplo de 3 escribir Fizz
Si es multiplo de 5 escribir Buzz
Si es multiplo de ambos  FizzBuzz
Si no, esbribir solo el numero
*/

/* for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz: ", i)
    } else if (i % 5 === 0) {
        console.log("Buzz: ", i)
    } else if (i % 3 === 0) {
        console.log("Fizz: ", i)
    } else {
        console.log(i)
    }
} */


/* Determina si un numero es primo usando solo operaciones basicas */


/* let primo = 97
let c = 0
for (let i = 1; i <= primo; i++) {
    if (primo % i === 0) {
        c += 1
    }
}
if (c === 2) {
    console.log("Es primo: ", primo)
} else {
    console.log("No es primo")
} */

/* 

*
**
***
****
*****

******
*    *
*    *
*    *
*    *
******

*/

/* const pisos = 5
let col = ""
for (let i = 1; i <= pisos; i++) {
    col = ""
    for (let j = 1; j <= i; j++) {
        col += "*"
    }
    console.log(col)
} */

/* 
Un sistema de tienda que  solicite al usuario precios de productos uno por uno
usando prompt

El usuario no sabe cuantos productos comprara, asiq ue el sistema debe seguir pidiendo precion hasta que el
usuario escriba FIN

Restricciones:
No se pueden usar vectores
El programa debe calcular:
    Total de compra
    Precio mas alto 
    Precio mas bajo
    cantidad total de productos
    Promedio de precio

Cuando el usuario ecriba FIn, mostrar todos los resultados
*/

let producto
let total = 0
let cantidad = 0
let promedio = 0
let validar
let mayor = 0
let menor = 0

while (true) {

    validar = prompt("Ingrese el precio del producto: ").toUpperCase().trim()
    if (validar === "FIN") {
        break
    }

    producto = Number(validar)
    total += producto
    cantidad++
    if (producto > mayor) {
        mayor = producto
    }
    if (producto < menor || cantidad === 1) {
        menor = producto
    }
}
promedio = Number(total / cantidad)
console.log(promedio, total, cantidad, menor, mayor)
