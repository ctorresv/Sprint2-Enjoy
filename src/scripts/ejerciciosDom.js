const cols = document.querySelectorAll(".col")
let dragged = null

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", () => dragged = item)
})

cols.forEach(col => {
    col.addEventListener("dragover", e => e.preventDefault())
    col.addEventListener("drop", () => {
        if (dragged) col.appendChild(dragged)
    })
})

const prod = document.getElementById("prod")
const precio = document.getElementById("precio")
const add = document.getElementById("add")
const msg = document.getElementById("msg")
const body = document.getElementById("tbody")

add.addEventListener("click", () => {
    const p = prod.value.trim()
    const pr = Number(precio.value)

    if (p.length < 3) return mostrar("Nombre muy corto")
    if (!pr || pr <= 0) return mostrar("Precio invalido")

    const existe = [...body.querySelectorAll("tr")].some(
        tr => tr.children[0].textContent.toLowerCase() === p.toLowerCase()
    )
    if (existe) return mostrar("EL producto ya existe")

    const tr = document.createElement("tr")
    tr.innerHTML = `<td>${p}</td><td>${pr}</td>`
    body.appendChild(tr)

    prod.value = ""
    precio.value = ""
    msg.textContent = ""

})

function mostrar(texto) {
    msg.style.color = "red"
    msg.textContent = texto
}

const lista = document.getElementById("lista")

lista.querySelectorAll("li").forEach(li => agregarControles(li))

function agregarControles(li) {
    const editar = document.createElement("button")
    editar.textContent = "Editar"

    const guardar = document.createElement("button")
    guardar.textContent = "Guardar"
    guardar.style.display = "none"

    const borrar = document.createElement("button")
    borrar.textContent = "Eliminar"

    editar.addEventListener("click", () => {
        const span = li.querySelector("span")
        const input = document.createElement("input")
        input.value = span.textContent
        li.replaceChild(input, span)

        editar.style.display = "none"
        guardar.style.display = "inline-block"
    })

    guardar.addEventListener("click", () => {
        const input = li.querySelector("input")
        const span = document.createElement("span")
        span.textContent = input.value
        li.replaceChild(span, input)

        guardar.style.display = "none"
        editar.style.display = "inline-block"
    })

    borrar.addEventListener("click", () => li.remove())

    li.append(editar, guardar, borrar)
}