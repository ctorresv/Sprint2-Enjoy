let edad
const pi = 3.1416
edad = 25
console.log("Esto es edad", edad)

/* Tipos de datos 
Number son todos lo numeros
int  integer Todos lo numero enteros 1 2 3 4 5...
float todos lo numeros  punto decimal decimales 1.2 3.3

*/
edad = 30

/* 
String Cadena de caracteres. a s f g h / * - + ? 1 2 3 45 64  pluotn
char Caracter c 

*/

let nombre = "Carlos"
nombre = 'Arturo'
nombre = `Jhon ${edad}`
console.log(nombre)


/* 
Boolean
verdadero o falso 
*/
let puedeVotar = false
puedeVotar = true

/* 
Arrays, Vectores, arreglos
Object
NUll
Udefined
*/

/* Operadores
Operadores aritmeticos:
+ - * / **  % 
*/

let a = 10
let b = 3
let reseultado = a ** b
console.log("Resultado suma", reseultado)

/* OPeradores de asignacion
= +=  -= *= /=
*/
let cont = 0
cont = cont + 1
cont += 3
cont += 3
cont += 3

/* Operadores comparacion
Devuelven falso o verdadero // Boolean

==  === != !== > >= < <=
*/

console.log("Igualdad", 5 == "5")
console.log("Igualdad", 5 === "5")
console.log("Negacion", 5 != "5")
console.log("Negacion", 5 !== "5")
console.log("Mayor que", 5 > 5)
console.log("Mayor que", 5 >= 5)


/* Opereradores logicos

true = 1
false = 0 

and &&

true && true = true
1 * 1 = 1
true && false = false
1 * 0 = 0

OR  || 
true || true = true
1 + 1 = 1
true || false = true
1 + 0 = 1 
false || false = false
0 + 0 = 0

Negacion

! 
!true = false
!false = true

*/

console.log(!(5 >= 6))

/* Operador ternario

condicion ? valor si es verdadero : valor si es falso

*/
edad = 13
let permiso = edad >= 18 ? "Puede pasar" : "No puede pasar"
console.log("Entrar a un bar", permiso)

/* Estructuras de control 
Permitir controlar el flujo de programa
Condicional
*/

if (edad >= 18) {
    console.log("Puede pasar")
} else {
    console.log("No puede pasar")
}


let nota = -69

if (nota >= 90) {
    console.log("Exelente")
} else if (nota >= 70) {
    console.log("Bien")
} else {
    console.log("reprobado")
}

/* Swich */

let dia = 1

switch (dia) {
    case 1: console.log("Lunes"); break
    case 2: console.log("Martes"); break
    case 3: console.log("Miercoles"); break
    default: console.log("Otro Dia")
}


/* Bucles
for
*/

for (let i = 0; i <= 5; i++) {
    console.log("Iteracion", i)
}

/* While */
let x = 0
while (x < 3) {
    console.log("Contador de x= ", x)
    break
}

/* do while */

let y = 0

/* do {
    console.log("Se ejecuta al menos una vez:",)
    y++
} while (y < 5)
console.log("Esto es y: ",y) */

for (let i = 1; i <= 5; i++) {
    if (i === 3) break
    console.log(i)
}