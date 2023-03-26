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
        if (publicaciones[peticion.params.titulo, peticion.params.editorial, peticion.params.editorial, peticion.params.autores, peticion.params.fecha]) {
            respuesta.status(409).json({
                name: 'Publicacion repetida',
                message: `Ya existe publicacion con titulo: ${peticion.params.titulo}, autor(es): ${peticion.params.autores}, 
                editorial: ${peticion.params.editorial} y fecha: ${peticion.params.fecha}`
            })
            return
        }
        publicaciones[peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha] = modeloPublicacion(
            idC, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrlRegistro(peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    borrarPublicacion: (peticion, respuesta) => {
        delete publicaciones[peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha]
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
