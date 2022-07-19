/*

string
number
boolean
array
object
undefined
null

*/


/**********
 * STRING
 ***********/
//string
let nome = 'Almir'
console.log(nome)

//string - concatenada
let sobrenome = 'Martins'
console.log(nome + ' ' + sobrenome) //não  é muito ultilizado

//string - literal
console.log(`${nome} ${sobrenome}`)



/**********
 * NUMBER
 ***********/
//number
let idade = 41
console.log(idade)
console.log(idade + 10)

let codigo = '41'
console.log(codigo)
console.log(codigo + 10)

// number - float
let porcentagem = 10.5
console.log(porcentagem + '%')



/**********
 * BOOLEAN
 ***********/
// boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)



/**********
 * ARRAY
 ***********/
// Permite colocar varios valores(como se fosse uma gaveta)
let linguagens = ['Javascript', 'Python', 'CSS', 'PHP']
console.log(linguagens)
console.log(linguagens.length)
console.log(linguagens[3])
console.log(linguagens[5])



/**********
 * OBJECT
 ***********/
// object permite guardar um conjunto de informaçoes distintas. como um array. Transinta informaçoes de um sitema para outro atraves do JSON.
let pessoa = {
  nome: 'Almir',
  sobrenome: 'Martins',
  idade: 41,
  habilidades: ['Javascript', 'Python', 'CSS', 'PHP']
}
console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa.habilidades[2])
console.log(pessoa.sobrenome, pessoa.habilidades[3])



/**********
 * UNDEFINE
 ***********/
// alguma coisa não definida
let endereco // declarada mas não definida.
console.log(endereco)



/**********
 * NULL
 ***********/
// significa nulo
let cidade = null 
console.log(cidade)