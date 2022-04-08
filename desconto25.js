// Crie um programa para vender um notebook com 
// desconto de 25%, sendo seu custo foi de R$ 3.000,00

//qual o valor do desconto de 25%?
//qual o valor para venda?

// *****Calculo matemático
// valorNotebook = 3.000,00
// percentual desconto = 25/100 retornou 0.25
//console.log(25/100)
// valorDesconto = 0.25 * 3000  retornou 750
//console.log(0.25 * 3000)
// valorVenda = 3.000,00 - 750 retornou 2.250
//console.log(3000 - 750)

let valorNotebook = 3000
let valorDesconto = (25/100) * valorNotebook
let valorVenda = valorNotebook - valorDesconto
console.log(`Valor para venda R$ ${valorVenda}`)


