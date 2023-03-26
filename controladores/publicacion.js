const modeloPublicacion = require('../modelos/publicacion.js')
var publicaciones = {}

let idC = 0
function generarUrlBusqueda(tituloPub, autoresPub, fechaPub) {
    return `/publicaciones/${tituloPub}/${autoresPub}/${fechaPub}`
}

function generarUrlRegistro(tituloPub, editorialPub, autoresPub, fechaPub) {
    return `/publicaciones/${tituloPub}/${autoresPub}/${editorialPub}/${fechaPub}`
}

function generarUrlBorrado(tituloPub, editorialPub, autoresPub, fechaPub) {
    return `/publicaciones/${tituloPub}/${autoresPub}/${editorialPub}/${fechaPub}`
}

module.exports = {

    crearPublicacion: (peticion, respuesta) => {
        if (publicaciones[peticion.params.id]) {
            respuesta.status(409).json({
                name: 'Id existente',
                message: `Ya existe publicacion con id: ${peticion.params.id}`
            })
            return
        }
        publicaciones[peticion.params.id] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    borrarPublicacion: (peticion, respuesta) => {
        delete publicaciones[peticion.params.id]
        let urlPublicacionBorrada = generarUrlBorrado(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.send(urlPublicacionBorrada)
    },

    obtenerPublicacion: (peticion, respuesta) => {

        if(!publicaciones[peticion.params.titulo, peticion.params.autores, peticion.params.fecha]) {

            respuesta.status(404).json({
                name: 'Publicacion inexistente',
                message: `No existe ninguna publicación con el
                título ${peticion.params.titulo}`
            })

            let pub = publicaciones[peticion.params.titulo, peticion.params.autores, peticion.params.fecha]
            respuesta.render('publicacion', {publicacion: pub})
        }
    },

    editarPublicacionTitulo: (peticion, nuevoTitulo, respuesta) => {

        publicaciones[peticion.params.id] = modeloPublicacion(
            peticion.params.id, nuevoTitulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.id)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionAutor: (peticion, nuevoAutor, respuesta) => {

        publicaciones[peticion.params.id] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, peticion.params.editorial, nuevoAutor, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.params.id)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionEditorial: (peticion, nuevaEditorial, respuesta) => {

        publicaciones[peticion.params.id] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, nuevaEditorial, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.params.id)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionFecha: (peticion, nuevaFecha, respuesta) => {

        publicaciones[peticion.params.id] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, nuevaFecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.params.id)
        respuesta.status(201).send(urlNuevaPublicacion)
    }
}
