const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))   
    window.location.href = '/'
}

const cargarContactos = (db) => {
    let claves = Object.keys(db)
    console.log(claves)
    for(clave of claves)
        let contacto = db.getItem(claves)
        console.log(contacto)
}

