let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let operacion = prompt("Ingrese la operacion (+, -, *, /)");
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
function division(numero1, numero2) {
    if (numero2 !== 0) {
        return numero1 / numero2;
    } else {
        return "Error";
    }
}
let resultado;
switch (operacion) {
    case "+":
        resultado = sumar(numero1, numero2);
        break;
    case "-":
        resultado = restar(numero1, numero2);
        break;
    case "*":
        resultado = multiplicacion(numero1, numero2);
        break;
    case "/":
        resultado = division(numero1, numero2);
        break;
}
console.log(resultado);