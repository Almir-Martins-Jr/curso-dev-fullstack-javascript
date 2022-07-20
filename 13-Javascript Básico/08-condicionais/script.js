let idade = 18

if (idade >= 18) {
  document.write('Ok, você tem acesso')
} else if (idade === 17) {
  document.write('necessario liberação dos pais')
} else {
  document.write('você NÃO pode acessar')
}



let nome = prompt ('Digite seu nome')

if (nome === 'Almir' || nome === 'almir') {
  document.write(`Olá ${nome}, Seja bem vindo!`)
} else {
  document.write('Você nã tem acesso administrador!')
}