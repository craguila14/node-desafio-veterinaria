const {registrar, leer} = require('./operaciones')

const [accion,nombre, edad, tipo, color, enfermedad ] = process.argv.slice(2)

if (accion === 'registrar') {
    registrar(nombre, edad, tipo, color, enfermedad)
}

if (accion === 'leer') {
    leer()
}
