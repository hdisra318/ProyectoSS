const modeloPublicacion = require('../modelos/publicacion.js')
var publicaciones = {}

function generarUrl(tituloPub, autoresPub, fechaPub) {
    return `/publicaciones/${tituloPub}/${autoresPub}/${fechaPub}`
}

module.exports = {

    crearPublicacion: (peticion, respuesta) => {
        if (publicaciones[peticion.params.titulo, peticion.params.autores, peticion.params.fecha]) {
            respuesta.status(409).json({
                name: 'Publicacion repetida',
                message: `Ya existe publicacion con titulo: ${peticion.params.titulo}, autor(es): ${peticion.params.autores} y fecha: ${peticion.params.fecha}`
            })
            return
        }
        publicaciones[peticion.params.titulo, peticion.params.autores, peticion.params.fecha] = modeloPublicacion(
            peticion.params.titulo, peticion.params.autores, peticion.params.fecha
        )
        let urlNuevaPublicacion = generarUrl(peticion.params.titulo, peticion.params.autores, peticion.params.fecha)
        respuesta.status(201).send(urlNuevaPublicacion)
    },

    borrarPublicacion: (peticion, respuesta) => {
        delete publicaciones[peticion.params.titulo, peticion.params.autores, peticion.params.fecha]
        let urlPublicacionBorrada = generarUrl(peticion.params.titulo, peticion.params.autores, peticion.params.fecha)
        respuesta.send(urlPublicacionBorrada)
    }
}
