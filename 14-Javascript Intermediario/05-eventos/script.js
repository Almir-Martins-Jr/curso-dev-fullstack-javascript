
let botaoTeste = document.querySelector('#botaoTeste')

botaoTeste.onclick = function () {
  alert('ok')
}






// Atribuir varias funções para um unico evento. Não subscreve o anterior
// addEventListener - adicionar um evento de escuta. 
//No evento abaixo ele executa duas funções no mesmo click.
let botaoTeste = document.querySelector('#botaoTeste')

botaoTeste.addEventListener('click', function(){
  console.log('mensagem 1')
})

botaoTeste.addEventListener('click', function(){
  console.log('mensagem 2')
})





// Dessa forma conseguimos reutilizar a função.
let botaoTeste = document.querySelector('#botaoTeste')

function cliqueBotao(){
  console.log('mensagem 1')
}
// addEventListener
botaoTeste.addEventListener('click', cliqueBotao)


// onclick 
botaoTeste.onclick = cliqueBotao
  