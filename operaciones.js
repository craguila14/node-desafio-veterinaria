const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))

    if(!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log('Por favor ingresa todos los datos')
        return
    }
    citas.push({nombre, edad, tipo, color, enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log('Cita creada exitosamente')
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    console.log(citas)
}





module.exports = {registrar, leer}