const modeloPublicacion = require('../modelos/publicacion.js')
var publicaciones = {}

function generarUrl(idPub, tituloPub, autoresPub, fechaPub) {
    return `/publicaciones/${idPub}/${tituloPub}/${autoresPub}/${fechaPub}`
}

module.exports = {

    crearPublicacion: (peticion, respuesta) => {
        if (publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha]) {
            respuesta.status(409).json({
                name: 'Publicacion repetida',
                message: `Ya existe publicacion con ID: ${peticion.params.id}, con titulo: ${peticion.params.titulo}, autor(es): ${peticion.params.autores} y fecha: ${peticion.params.fecha}`
            })
            return
        }
        publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    borrarPublicacion: (peticion, respuesta) => {
        delete publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha]
        let urlPublicacionBorrada = generarUrl(peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha)
        respuesta.send(urlPublicacionBorrada)
    },

    obtenerPublicacion: (peticion, respuesta) => {

        if(!publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha]) {

            respuesta.status(404).json({
                name: 'Publicacion inexistente',
                message: `No existe ninguna publicación con ID ${peticion.params.id} y 
                título ${peticion.params.titulo}`
            })

            let pub = publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha]
            respuesta.render('publicacion', {publicacion: pub})
        }
    },

    editarPublicacionTitulo: (peticion, nuevoTitulo, respuesta) => {

        publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha] = modeloPublicacion(
            peticion.params.id, nuevoTitulo, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.id, nuevoTitulo, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionAutor: (peticion, nuevoAutor, respuesta) => {

        publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, nuevoAutor, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.id, peticion.params.titulo, nuevoAutor, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    editarPublicacionFecha: (peticion, nuevaFecha, respuesta) => {

        publicaciones[peticion.params.id, peticion.params.titulo, peticion.params.autores, peticion.params.fecha] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, peticion.params.autores, nuevaFecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.id, nuevoAutor, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    }
}
