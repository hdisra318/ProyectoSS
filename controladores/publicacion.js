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
        if (publicaciones[peticion.params.titulo]) {
            respuesta.status(409).json({
                name: 'Titulo existente',
                message: `Ya existe publicacion con titulo: ${peticion.params.titulo}`
            })
            return
        }
        publicaciones[peticion.params.titulo] = modeloPublicacion(
            idC, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        ++idC
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    borrarPublicacion: (peticion, respuesta) => {
        delete publicaciones[peticion.params.titulo]
        let urlPublicacionBorrada = generarUrlBorrado(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.send(urlPublicacionBorrada)
    },

    obtenerPublicacion: (peticion, respuesta) => {

        if(!publicaciones[peticion.params.titulo]) {

            respuesta.status(404).json({
                name: 'Publicacion inexistente',
                message: `No existe ninguna publicación con el
                título ${peticion.params.titulo}`
            })

            let pub = publicaciones[peticion.params.titulo]
            respuesta.render('publicacion', {publicacion: pub})
        }
    },

    editarPublicacionTitulo: (peticion, nuevoTitulo, respuesta) => {
        delete publicaciones[peticion.params.titulo]
        publicaciones[nuevoTitulo] = modeloPublicacion(
            idC, nuevoTitulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        ++idC
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionAutor: (peticion, nuevoAutor, respuesta) => {

        publicaciones[peticion.params.titulo] = modeloPublicacion(
            idC, peticion.params.titulo, peticion.params.editorial, nuevoAutor, peticion.params.fecha
        )
        ++idC
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionEditorial: (peticion, nuevaEditorial, respuesta) => {

        publicaciones[peticion.params.titulo] = modeloPublicacion(
            idC, peticion.params.titulo, nuevaEditorial, peticion.params.autores, peticion.params.fecha
        )
        ++idC
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionFecha: (peticion, nuevaFecha, respuesta) => {

        publicaciones[peticion.params.titulo] = modeloPublicacion(
            idC, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, nuevaFecha
        )
        ++idC
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    }
}
