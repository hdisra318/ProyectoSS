module.exports = (tituloPub, autoresPub, fechaPub) => {
    
    let titulo = tituloPub.valueOf()
    let autores = autoresPub.valueOf()
    let fecha = fechaPub.valueOf()

    return {

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