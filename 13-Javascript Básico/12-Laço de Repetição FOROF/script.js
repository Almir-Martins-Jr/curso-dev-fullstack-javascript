let clientes = [{
    nome: 'Almir',
    idade: 41,
    linguagens: ['HTML', 'CSS', 'JavaScript']
  },

  {
    nome: 'Paulo',
    idade: 28,
    linguagens: ['Java', 'PHP', 'JavaScript']
  },

  {
    nome: 'Pedro',
    idade: 30,
    linguagens: ['Python', 'PHP', 'Java']
  }
]

let htmlClientes = ''

for (let alunos of clientes) {

  let listaLinguagens = ''

  for(let linguagem of alunos.linguagens) {
    listaLinguagens += `<li>${linguagem}</li>`
  }

  htmlClientes += `
  <li>
      <b>Nome:</b> ${alunos.nome} <br>
      <b>Idade:</b> ${alunos.idade} <br>
      <b>Linguagens</b> <br>
      <ul>
        ${listaLinguagens}
      </ul>
    </li>
  `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes