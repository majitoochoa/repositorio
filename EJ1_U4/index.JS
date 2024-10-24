let numero1 = parseFloat(prompt("Ingresa el primer numero o cifra:"));
let numero2 = parseFloat(prompt("Ingresa el segundo numero o cifra:"));
let operacion = prompt("Ingrese la operacion que necesita realizar(+, -, *, /):");

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: División por cero";
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
        resultado = multiplicar(numero1, numero2);
        break;
    case "/":
        resultado = dividir(numero1, numero2);
        break;
    default:
        resultado = "Operación no válida";
}

console.log(`Resultado: ${resultado}`);