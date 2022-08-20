// let quadrado = document.querySelector('.quadrado')

// function minhaFuncao() {
//   console.log ('mensagem')
// }

// quadrado.onclick = minhaFuncao

// quadrado.onmousemove = minhaFuncao

// quadrado.onmouseenter =  minhaFuncao

// quadrado.onmouseout = minhaFuncao



let quadrado = document.querySelector('.quadrado')

function minhaFuncao(evento) {
  console.log(evento.key)
}

// window.addEventListener('resize', minhaFuncao)

window.addEventListener('keypress', minhaFuncao)


// cada evento traz um objeto com informações relaciona ao evento.