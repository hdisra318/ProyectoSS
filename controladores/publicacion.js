const modeloPublicacion = require('../modelos/publicacion.js')
var publicaciones = {}

let idC = 1

function generarUrl(tituloPub) {
    return `/publicaciones/${tituloPub}`
}

module.exports = {

    crearPublicacion: (peticion, respuesta) => {
        if (publicaciones[peticion.params.titulo]) {

            respuesta.status(409).json({
                name: 'Libro existente',
                message: `Ya existe publicacion con titulo: ${peticion.params.titulo}`
            })
            return
        }

        publicaciones[peticion.params.titulo] = modeloPublicacion(
            idC, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        ++idC

        let urlNuevaPublicacion = generarUrl(peticion.params.titulo)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    borrarPublicacion: (peticion, respuesta) => {
        delete publicaciones[peticion.params.titulo]
        let urlPublicacionBorrada = generarUrl(peticion.params.titulo)
        respuesta.send(urlPublicacionBorrada)
    },

    obtenerPublicacion: (peticion, respuesta) => {

        if(!publicaciones[peticion.params.titulo]) {

            respuesta.status(404).json({
                name: 'Publicacion inexistente',
                message: `No existe ninguna publicación con el
                título ${peticion.params.titulo}`
            })
        }

        let pub = publicaciones[peticion.params.titulo]
        respuesta.render('publicacion', {publicacion: pub})

    },

    obtenerPublicacionDetalle: (peticion, respuesta) => {

        if(!publicaciones[peticion.params.titulo]) {

            respuesta.status(404).json({
                name: 'Publicacion inexistente',
                message: `No existe ninguna publicación con el
                título ${peticion.params.titulo}`
            })
        }

        let pub = publicaciones[peticion.params.titulo]
        respuesta.render('detalle', {publicacion: pub})

    },

    obtenerPublicacionEditar: (peticion, respuesta) => {

        if(!publicaciones[peticion.params.titulo]) {

            respuesta.status(404).json({
                name: 'Publicacion inexistente',
                message: `No existe ninguna publicación con el
                título ${peticion.params.titulo}`
            })
        }

        let pub = publicaciones[peticion.params.titulo]
        respuesta.render('editar', {publicacion: pub})

    },

    editarPublicacion: (peticion, respuesta) => {

        delete publicaciones[peticion.params.tituloAnt]

        publicaciones[peticion.params.titulo] = modeloPublicacion(
            peticion.params.id, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )

        let urlNuevaPublicacion = generarUrl(peticion.params.titulo)
        respuesta.status(201).send(urlNuevaPublicacion)

    }
}
