let sumar = require('./operaciones/suma')
let restar = require('./operaciones/resta')
let multiplicar = require('./operaciones/multiplicacion')
let dividir = require('./operaciones/division')


let process= require('process')
let operaciones = process.argv[2]
let num1 = process.argv[3]
let num2 = process.argv[4]

num1 = +num1
num2 = +num2



switch (operaciones) {
    case 'sumar':
        console.log(sumar(num1,num2));
        break;
    case 'restar':
        console.log(restar(num1,num2))
        break;
    case 'multiplicar':
        console.log(multiplicar(num1,num2))
        break;
    case 'dividir':
        console.log(dividir(num1,num2))
        break;
    default:
        console.log('No se encuentra la operacion solicitada');
        break;
}


