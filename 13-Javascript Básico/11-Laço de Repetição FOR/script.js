let opcoes

for (let contador = 1900; contador <= 2021; contador++) {
opcoes += `<option>${contador}</option>`;
}

let selecionar = '<option>-- Selecionar --</option>'

document.querySelector('#ano').innerHTML = selecionar + opcoes



let lista = ''

let clientes = ['Paulo','João','André','José']

for (let contador = 0; contador <= clientes.length - 1; contador++) {
lista += `<li>${clientes[contador]} - ${contador}</li>`;
}

document.querySelector('#listaClientes').innerHTML = lista


// O for permite a gente percorrer itens de um array e manipular esses itens