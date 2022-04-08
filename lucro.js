// crie um programa que me diga como 
// lucrar nesta situação: quero vender uma 
// bicicleta que 60% do seu valor é R$ 300,00
// por quanto devo vendê-la para lucrar 25%?

// obs: usar regra de 3

//60% -> 300
//100% -> x
// 60x = 100*300
//x= (100*300)/60


let descobreCemPorCento = (100*300)/60 // o resul 500
let descobreVinteECincoPorCento = descobreCemPorCento * (25/100) // res 125
let VendaComLucro = descobreCemPorCento + descobreVinteECincoPorCento // resultado 625
console.log(VendaComLucro)