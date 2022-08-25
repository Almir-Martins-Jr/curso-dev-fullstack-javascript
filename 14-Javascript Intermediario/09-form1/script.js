 let formulario = document.querySelector('#formCadastro')

 formulario.onsubmit = function (evento) {
   evento.preventDefault()

   let inputNome = document.forms['formCadastro']['nome']

   if (!inputNome.value) {
     console.log('campo nome esta vazio')
     inputNome.classList.add('inputError')

     let span = inputNome.nextSibling.nextSibling
     span.innerText = 'Digite seu nome!'
   } else {
     inputNome.classList.remove('inputError')

     let span = inputNome.nextSibling.nextSibling
     span.innerText = ''
   }



   let inputEmail = document.forms['formCadastro']['email']

   if (!inputEmail.value) {
     console.log('campo email esta vazio')
     inputEmail.classList.add('inputError')

     let span = inputEmail.nextSibling.nextSibling
     span.innerText = 'Digite seu email!'
   } else {
     inputEmail.classList.remove('inputError')

     let span = inputEmail.nextSibling.nextSibling
     span.innerText = ''
   }



   let selectCidade = document.forms['formCadastro']['cidade']

   if (!selectCidade.value) {
     console.log('campo cidade esta vazio')
     selectCidade.classList.add('inputError')

     let span = selectCidade.nextSibling.nextSibling
     span.innerText = 'Digite sua cidade!'
   } else {
     selectCidade.classList.remove('inputError')

     let span = selectCidade.nextSibling.nextSibling
     span.innerText = ''
   }


 }