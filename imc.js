// Crie um programa para calcular o imc



// **** Calculo matemático
// valorImc = valorPeso / (altura * altura)

const valorPeso = 66
const valorAltura = 1.63
const valorAlturaAoQuadrado = Math.pow(valorAltura, 2) // é um metodo para calcular ao quadrado
const resultadoImc = (valorPeso / valorAlturaAoQuadrado).toFixed(2)
console.log(`Seu IMC é: ${resultadoImc}`)
