const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
    try {
        
        let salida = '';

        for (let index = 1; index <= limite ; index++) {
            salida += `    ${base} x ${index} = ${base*index}\n`;
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida, );

        if (listar) {
            console.log('================='.cyan);
            console.log('   Tabla del:', base.toString().green);
            console.log('================='.cyan);
            console.log(salida);
        }

        return `Tabla-${base} creada`.trap; 

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}