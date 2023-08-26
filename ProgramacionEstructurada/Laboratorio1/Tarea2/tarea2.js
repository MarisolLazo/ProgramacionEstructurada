const arrayEvaluar = []
const entrada = parseInt(prompt("Cuantos datos desea ingresar :")); // Solicitar al usuario que ingrese datos

if (isNaN(entrada) || entrada <= 0) {
    alert("El dato ingresado es invalido")
} else {
    for (let i = 0; i < entrada; i++) {
        const numero = parseInt(prompt("Ingrese los numeros que desea que vayan en el array"));
        if (isNaN(numero) || numero < 0) {
            alert("Debe ingresar un numero que sea mayor o igual que 0")
        } else {
            arrayEvaluar.push(numero)
        }
    }
    console.log(arrayEvaluar)
}

// Funcion para verificar si es false o true

function verificarParesImpares(miArray) {
    for (let i = 0; i < miArray.length; i++) {
        if (i % 2 === 0 && miArray[i] % 2 !== 0) {
            // Índice par con número impar, retorna => false
            return false;
        } else if (i % 2 !== 0 && miArray[i] % 2 === 0) {
            // Índice impar con número par, retorna => false
            return false;
        }
    }
    // Si no se encontraron contradicciones de la condición, retorna => true
    return true;
}
console.log(verificarParesImpares(arrayEvaluar))