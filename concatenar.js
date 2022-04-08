// concatenar
const saudacao = 'Olá'
const aluna = 'Nilva'
console.log( saudacao + aluna) // retorno OláNilva
console.log(saudacao + '' + aluna) // retorno Olá Nilva observe que tem espaço agora entre as palavras

// interpolar
// Template literals `` uso da crase

let animal1ParaAdocao = 'gato'
let animal2ParaAdocao = 'cachorro'
console.log(`Animais disponiveis para adoção: ${animal1ParaAdocao} e ${animal2ParaAdocao}`) //  usar crase no inicio e no fim.
//para citar uma variavel que está declarada usar o $ e inserir chaves.

/* o let pode sobrescrever o valor veja o exemplo:
let animal1ParaAdocao = 'gato'
animal1ParaAdocao = 'coelho'
o retorno será coelho*/
