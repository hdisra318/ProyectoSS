module.exports = (idPub, tituloPub, autoresPub, fechaPub) => {
    
    let id = idPub.valueOf()
    let titulo = tituloPub.valueOf()
    let autores = autoresPub.valueOf()
    let fecha = fechaPub.valueOf()

    return {

        obtenerId: () => {
            return id
        },
        obtenerTitulo: () => {
            return titulo
        },
        obtenerAutores: () => {
            return autores
        },
        obtenerFecha: () => {
            return fecha
        },
        toString: () => {
            return `${titulo}: ${autores}, ${fecha}`
        }
    
    }

}