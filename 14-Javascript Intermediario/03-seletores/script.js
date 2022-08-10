// essa função tem o return dentro, e retorna um objeto com varias opções. uma dessas opçoes é o innerHTML.

//SELETOR PO ID
document.querySelector('#titulo').innerHTML='<i>obelisco</i>'




//SELETOR PO TAG
// o querySelector seleciona somente uma ocorrência
document.querySelector('a').innerHTML='Cartas'




// SELECIONANDO MAIS DE 1 ITEM POR TAG
// o querySelectorall seleciona todas ocorrências
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // função anonima /callback
  elemento.innerHTML ='Cartas'
})
// for each percorre o array retornando seu conteúdo




// SELECIONANDO MAIS DE UM ITEM POR CLASSES. EXEMPLOS:
let boxes = document.querySelectorAll ('.box')

boxes.forEach(function(box, index){
box.innerHTML = 'box' + (index + 1)


// let count = 0
// boxes.forEach(function(box){
//  count++
 
//   box.innerHTML = 'box' + count
})






