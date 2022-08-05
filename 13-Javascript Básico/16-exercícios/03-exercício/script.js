function acesso () {
  let nome = prompt('Digite seu nome:')
  
  let idade = prompt('Digite sua idade:')
  
  
   if (idade >= 18) {
    document.write (`<h1>Olá ${nome}, você é maior de idade!<h1>`)
  } else if (idade < 18) {
    document.write (`<h2>Olá ${nome}, você é menor de idade!<h2>`)
  }
  
  if (nome === 'Thomas Anderson' || nome ==='thomas anderson') {
    document.write ('<h2>Você é personagem do filme The Matrix!<h2>')
}

}