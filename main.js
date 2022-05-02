const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const area = document.querySelector('.area')
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto')

const listadoContactos = document.querySelector('.listado-contactos')

const db = window.localStorage

btnAgregarContacto.onclick = () => {
    let contacto = {
        nombre: nombre.value,
        numero: numero.value,
        area: area.value,
    }
    guardarContacto(db, contacto)
}

