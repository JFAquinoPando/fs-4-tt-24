export const $ =function (selector) {
    return document.querySelector(selector)
}

export const $$ = function (selector) {
    return document.querySelectorAll(selector)
}

export const pedir = async (url, opciones = {method: "GET"}) => {
    const consulta = await fetch(url, opciones)
    const resultado = await consulta.json()
    return resultado
}

export const mostrarIcono = (tecnologia) => {
    if (tecnologia.lower() === "blade") {
        return `https://cdn.simpleicons.org/laravel`
    }
    return `https://cdn.simpleicons.org/${tecnologia.lower()}`
}