// classlist adiciona uma classe à função.



let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


let aberto = false // flag.  Variavel declarada para indicar estado de uma determinada aplicação. No caso, aberto ou fechado.

function abrirOuFecharMenu() {

  if (aberto === true) {
    aberto = false
    menuMobile.classList.remove('aberto')
    botaoMenu.innerText = 'abrir menu'
  } else if (aberto === false) {
    aberto = true
    menuMobile.classList.add('aberto')
    botaoMenu.innerText = 'FECHAR menu'
  }

}