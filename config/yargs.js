const argv = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: "Es la base de la tabla de multiplicar"
        })
    .option(
        'l', {
            alias: 'listar',
            type: 'boolean',
            describe: "Muestra la tabla por consola"
        })
    .option(
        'h', {
            alias: 'limite',               
            type: 'number',
            describe: "Limite de la tabla de multiplicar"
        })
    .check((argv, options) => {
        if(isNaN(argv.b || argv.h)){
            throw 'La base o el límite tienen que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = {
    argv
}