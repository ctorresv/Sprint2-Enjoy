const caja = document.getElementById("caja")
/* let posicion = 0
let opacidad = 0
let y = 0 */

/* const intervalo = setInterval(() => {
    posicion += 2
    caja.style.left = posicion + "px"

    if (posicion >= 300) {
        clearInterval(intervalo)
    }
}, 16) */

/* function animar() {
    posicion += 3
    caja.style.transform = `translateX(${posicion}px)`

    if (posicion < 300) {
        requestAnimationFrame(animar)
    }
}

animar() */

/* function fadeIn() {
    
    opacidad += 0.02
    caja.style.opacity = opacidad

    if (opacidad < 1) {
        requestAnimationFrame(fadeIn)
    }

}
fadeIn()  */

/* 

function bajar() {
    y += 4
    caja.style.transform = `translateY(${y}px)`

    if (y < 200) {
        requestAnimationFrame(bajar)
    }
}
bajar()  */

/* const duracion = 3000 // 1 segundo
let inicio = null */

/* function animarConTiempo(timestamp) {
    if (!inicio) inicio = timestamp
    const progreso = timestamp - inicio
    const porcentaje = Math.min(progreso/ duracion, 1)

    caja.style.transform = `translateX(${porcentaje *300}px)`

    if (porcentaje < 1) {
        requestAnimationFrame(animarConTiempo)
    }
}

requestAnimationFrame(animarConTiempo) */

/* function easeOut(t) {
    return 1 - Math.pow(1 - t, 3)
}

function animarEase(timestamp) {
    if (!inicio) inicio = timestamp
    const progreso = timestamp - inicio
    const t = Math.min(progreso / duracion, 1)
    const esased = easeOut(t)

    caja.style.transform = `translateX(${esased * 300}px)`

    if (t < 1) {
        requestAnimationFrame(animarEase)
    }
}

requestAnimationFrame(animarEase) */

/* let opacidad = 0
let velocidad = 0.02
let subiendo = true

function fadeIn() {
    if (subiendo) {
        opacidad += velocidad
        if (opacidad >= 1) {
            opacidad = 1
            subiendo = false
        }
    } else {
        opacidad -= velocidad
        if (opacidad <= 0) {
            opacidad = 0
            subiendo = true
        }
    }

    caja.style.opacity = opacidad
    requestAnimationFrame(fadeIn)

}
fadeIn() */

let posY = 0
let velocidad = 0
const gravedad = 0.05

function rebote() {
    velocidad += gravedad
    posY += velocidad

    if (posY > 200) {
        posY = 200
        velocidad *= -0.8
    }
    caja.style.transform = `translateY(${posY}px)`
    requestAnimationFrame(rebote)
}

rebote()

const barra = document.getElementById("barra")
let ancho = 0

function crecer() {
    ancho += 4
    barra.style.width = `${ancho}px`

    if (ancho < 400) {
        requestAnimationFrame(crecer)
    }
}

crecer()


const cuadro = document.getElementById("cuadro")
let valor = 0

function cambiarColor() {
    valor += 0.2
    cuadro.style.backgroundColor = `rgb(${255 - valor}, 0 , ${valor})`

    if (valor < 255) {
        requestAnimationFrame(cambiarColor)
    }
}

cambiarColor()


const objeto = document.getElementById("objeto")
let x = 0
let y = 0

function mover() {
    x += 3
    y += 3
    objeto.style.transform = `translate(${x}px, ${y}px)`

    if (x < 500) {
        requestAnimationFrame(mover)
    }
}

mover()

const popup = document.getElementById("popup")
let escala = 0

function escalar() {
    escala += 0.002
    popup.style.transform = `scale(${escala})`

    if (escala < 1) {
        requestAnimationFrame(escalar)
    }
}

escalar()

const tiempo = document.getElementById("tiempo")
let anchoT = 300

function countDown() {
    anchoT -= 1
    tiempo.style.width = `${anchoT}px`

    if (ancho > 0) {
        requestAnimationFrame(countDown)
    }

}

countDown()

const seguidor = document.getElementById("seguidor")
let sx = 0
let sy = 0
let targetX = 0
let targetY = 0

window.addEventListener("mousemove", e => {
    targetX = e.clientX
    targetY = e.clientY
})

function seguir() {
    sx += (targetX - sx) * 0.1
    sy += (targetY - sy) * 0.1

    seguidor.style.transform = `translate(${sx}px, ${sy}px)`
    requestAnimationFrame(seguir)
}

seguir()

const personaje = document.getElementById("personaje")
let estado = "quieto"

function correr() {
    estado = "corriendo"
    personaje.style.background = "green"
}

function saltar() {
    if (estado !== "saltando") {
        estado = "saltando"
        let y = 0

        function salto() {
            y -= 4
            personaje.style.transform = `translateY(${y}px)`

            if (y < 80) {
                requestAnimationFrame(salto)
            } else {
                personaje.style.transform = "translateY(0)"
                estado = "quieto"
                personaje.style.background = "gray"
            }
        }

        salto()
    }
}