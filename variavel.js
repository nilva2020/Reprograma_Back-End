// tipos de variaveis var, let e const, observa que var ate 2015 foi utilizada.
// atualmente utiliza-se let ou const que são as palavras reservada no JS
// let pode ou não definir um valor inicial, e PODE modificar o valor principal e substituir por outro, veja o exemplo: 
// let age
// age = 49
// age = 50
// ao rodar o codigo o valor 49 será substituido por 50
// let pode ser utilizado em todo o codigo mesmo fora do escolpo exemplo:
// age = 49 --- fora do escolpo
//function sum(age){
 //   return age +1  //---vai somar o valor do age fora ///do escolpo e incrementar +1//
//}

// const precisa de um valor inicial ou seja o valor NÃO //vai modificar futuramente no codigo.
// O const não podem ser atualizados ou reatribuídas


/* 2015 a palavra var foi descontinuada
var soma = 2 + 7
console.log(soma)

var nome = 'Mel'
console.log(nome)

// tipos de variaveis
var nome = 'Nilva' // string
var idade = 50 // inteiro ou int
var maiorDeIdade = true // boolean
var myLastName = underfind // underfind é o valor para a variavel o qual ainda não foi definido
var myFirtName =  null // null é o valor nulo */

// exercicios - criar variaveis usando let e const,
// atribuir valores e  identificar comportamentos e saídas quando tentarmos recuperar.

// o let ira subscrever o primeiro nome e retornar o segundo
let nome
nome = 'Mel'
nome = 'Nilva'
console.log(nome)

// const irá subscrever se repetir duas vezes ou mais o const para cada valor de variavel.
const cidade1 = 'Belem'
const cidade2 = 'Manaus'
console.log(cidade1, cidade2)