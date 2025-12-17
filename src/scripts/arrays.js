/* let datos = [20, "carlos", true, [1, 2, 3]]
let frutas = ["Mango", "Pera", "Uva"]

console.log(frutas[2])

frutas[0] = "Melon"
console.log(frutas)

frutas.push("fresa")
frutas.pop()
console.log(frutas.length)


let numeros = [3, 5, 7, 9]
let total = 0
for (let i = 0; i < numeros.length; i++) {
    total += numeros[i]
}
console.log(total) */

let numeros = [3, 5, 7, 9]

//numeros.push(10)
numeros[numeros.length] = 10
console.log(numeros)

//numeros.pop()

numeros.length = numeros.length - 1
console.log("Pop", numeros)

/* shift */

let arr = ["a", "b", "c"]
//arr.shift()
console.log(arr)

let newArr = []

for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i])
}

console.log("newArr", newArr)

/* unshift */

arr.unshift("x")
console.log(arr)

let newArr2 = ["y"]
for (let i = 0; i < arr.length; i++) {
    newArr2.push(arr[i])
}

console.log(newArr2)


let array = [10, 20, 30, 40]
//array.splice(1,2)
console.log(array)

let newArr3 = []

for (let i = 0; i < array.length; i++) {
    if (i < 1 || i > 2) {
        newArr3.push(array[i])
    }
}

console.log(newArr3)


/* slice */

//let sub = array.slice(0, 3)
let sub = []

for (let i = 0; i < 3; i++) {
    sub.push(array[i])
}

console.log(sub)


/* map */

let numero1 = [1, 2, 3, 4, 5]

let res = numero1.map(n => n * 2)

console.log(res)
let resultado = []

for (let i = 0; i < numero1.length; i++) {
    resultado.push(numero1[i] * 2)
}

/* filter */

let res1 = numero1.filter(n => n % 2 === 0)
console.log(res1)
let resultado1 = []
for (let i = 0; i < numero1.length; i++) {
    if (numero1[i] % 2 === 0) {
        resultado1.push(numero1[i])
    }
}
console.log(resultado1)

/* reduce */

let num = [5, 5, 5]
let suma = num.reduce((acc, n) => acc + n, 0)
console.log(suma)
let sum = 0
for (let n of num) {
    sum += n
}


/* find */

let res2 = numero1.find(n => n % 2 === 0)
console.log(res2)
let result = undefined

for (let n of numero1) {
    if (n % 2 === 0) {
        result = n
        break
    }
}

/* Every */

let pares = [2, 4, 6, 8]
let check = pares.every(n => n % 2 === 0)
console.log(check)
let check1 = true

for (let n of pares) {
    if (n % 2 !== 0) {
        check1 = false
        break
    }
}
console.log(check1)


/* some */

let negative = [5, 10, 5, 20]
let check2 = negative.some(n => n < 0)
console.log(check2)
let check3 = false

for (let n of negative) {
    if (n < 0) {
        check3 = true
        break
    }
}
console.log(check3)


let orden = [10, 2, 30, 4]
let ordenado = orden.sort((a, b) => a - b)
//console.log(ordenado)

for (let i = 0; i < orden.length; i++) {
    for (let j = 0; j < orden.length - 1; j++) {
        if (orden[j] > orden[j + 1]) {
            let temp = orden[j]
            orden[j] = orden[j + 1]
            orden[j + 1] = temp
        }
    }
}
console.log(orden)