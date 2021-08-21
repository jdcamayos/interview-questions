// Ejercicios de Hola Mundo

// 1. Como poder multiplicar dos numeros sin utilizar el signo de multiplicación
const multiply = (a,b) => {
    let result = 0
    const isPositive = Math.abs(b) == b
    for ( i = 0; i < Math.abs(b); i++) {
        result = isPositive ? (result + a) : (result - a)
    }
    return result
}

console.log(multiply(-5,4))
console.log(-5*4)