const p = document.querySelector(".parrafo")
p.style.color = "blue"
p.style.fontSize = "20px"

const input = document.getElementById("nombre")
const btn = document.getElementById("boton")

btn.addEventListener("click", () => {
    console.log("Nombre: ", input.value)
})

const lista = document.getElementById("lista")
const boton = document.getElementById("add")
const del = document.getElementById("del")


boton.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = "Elemento nuevo"
    lista.appendChild(li)
})

lista.addEventListener("click", e => {
    console.log(e.target.tagName)
    if (e.target.tagName === "LI") {
        e.target.style.background = "green"
    }
})

del.addEventListener("click", () => {
    if (lista.lastChild) {
        lista.lastChild.remove()
    }
})


const caja = document.getElementById("caja")

caja.addEventListener("click", () => {
    console.log(caja.classList.toggle("activo"))

})

const form = document.getElementById("form")
const apellido = document.getElementById("apellido")
const msg = document.getElementById("mensaje")

form.addEventListener("submit", e => {
    e.preventDefault()

    if (apellido.value.trim() === "") {
        msg.textContent = "Debe ingresar un nombre"
        msg.style.color = "red"
    } else {
        msg.textContent = "Hola: " + apellido.value
        msg.style.color = "green"
    }
})


const inp = document.getElementById("text")
const crear = document.getElementById("crear")
const cont = document.getElementById("contenedor")

crear.addEventListener("click", () => {
    const texto = inp.value.trim()

    if (texto === "") return

    const card = document.createElement("div")
    card.classList.add("card")
    card.style.border = "1px solid  #aaa"
    card.style.padding = "10px"
    card.style.margin = "10px 0"

    const p = document.createElement("p")
    p.textContent = texto

    const x = document.createElement("button")
    x.textContent = "X"

    x.addEventListener("click", () => {
        card.remove()
    })

    card.appendChild(p)
    card.appendChild(x)
    cont.appendChild(card)

    inp.value = ""
})


const txt = document.getElementById("txt")
document.getElementById("bold").addEventListener("click", () => {
    txt.style.fontWeight = txt.style.fontWeight === "bold" ? "normal" : "bold"
})

document.getElementById("italic").addEventListener("click", () => {
    console.log(txt.style.fontStyle)
    txt.style.fontStyle = txt.style.fontStyle === "italic" ? "normal" : "italic"
})

document.getElementById("under").addEventListener("click", () => {
    txt.style.textDecoration = txt.style.textDecoration === "underline" ? "none" : "underline"
})


const tabs = document.querySelectorAll(".tab")
console.log(tabs)
const contenidos = document.querySelectorAll(".contenido")

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        contenidos.forEach(c => { c.style.display = "none" })

        const id = tab.dataset.target
        document.querySelector(id).style.display = "block"
    })
})

const nuevo = document.getElementById("nuevo")
const contenedor = document.getElementById("contenedor1")
console.log(contenedor)
nuevo.addEventListener("click", () => {
    const box = document.createElement("div")
    box.style.border = "1px solid #aaa"
    box.style.padding = "10px"
    box.style.margin = "10px 0"

    let valor = 0

    const num = document.createElement("span")
    num.textContent = valor
    num.style.margin = "0 10px"

    const mas = document.createElement("button")
    mas.textContent = "+"

    const menos = document.createElement("button")
    menos.textContent = "-"

    const borrar = document.createElement("button")
    borrar.textContent = "Eliminar"

    mas.addEventListener("click", () => {
        valor++
        num.textContent = valor
    })

    menos.addEventListener("click", () => {
        valor--
        num.textContent = valor
    })

    borrar.addEventListener("click", () => box.remove())

    box.append(mas, num, menos, borrar)
    contenedor.appendChild(box)
})


const inp1 = document.getElementById("buscador")
const items = document.querySelectorAll("#lista1 li")
console.log(inp1)
inp1.addEventListener("input", () => {
    const texto = inp1.value.toLowerCase()
    console.log(texto)
    items.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(texto) ? "list-item" : "none"
    })
})

const nom = document.getElementById("nombre1")
const edad = document.getElementById("edad")
const agregar = document.getElementById("agregar")
const body = document.getElementById("body")

agregar.addEventListener("click", () => {
    console.log(nom.value)

    if (!nom.value || !edad.value) {
        console.log("Es el if")
        return
    }

    const tr = document.createElement("tr")

    const tdN = document.createElement("td")
    tdN.textContent = nom.value

    const tdE = document.createElement("td")
    tdE.textContent = edad.value

    const tdB = document.createElement("td")
    const btn = document.createElement("button")
    btn.textContent = "X"
    btn.addEventListener("click", () => tr.remove())
    tdB.appendChild(btn)

    tr.append(tdN, tdE, tdB)
    body.appendChild(tr)

    nom.value = ""
    edad.value = ""
})


const lista2 = document.getElementById("lista2")

lista2.querySelectorAll("li").forEach(li => {
    const up = document.createElement("button")
    up.textContent = "Up"

    const down = document.createElement("button")
    down.textContent = "down"

    up.addEventListener("click", () => {
        const prev = li.previousElementSibling
        if (prev) lista2.insertBefore(li, prev)
    })

    down.addEventListener("click", () => {
        const next = li.nextElementSibling
        if (next) lista2.insertBefore(next, li)
    })

    li.append(" ", up, down)
})