let listaAtores = [{
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },
  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars',
  },
  {
    nome: 'Michael Keaton',
    personagem: 'Batman',
    filme: 'Batman',
  },

]
htmlatores = ''

for (let lista of listaAtores) {

  htmlatores += `
  
    <li>
      <b> ${lista.nome} </b>
        <br> 
        <br> 
        
        Interpreta o personagem  ${lista.personagem} do filme ${lista.filme}
    </li>
  </ul>

  `
}


document.querySelector('#atores').innerHTML = htmlatores