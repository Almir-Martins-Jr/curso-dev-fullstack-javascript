let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1) //parseInt transforma string em number
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
  document.write('OK, passou de ano')   
} else if (media < mediaMinima) {
  document.write('Ops, não passou de ano!')
}

document.write('<br> <br>')

if (media >= mediaMinima && media === 10) {
  document.write('VOCE ARRASOU, continue assim!')
} else if (media >= mediaMinima && media === 09) {
  document.write('Quase 10, parabéns!')
}

if (media < mediaMinima && media === 0) {
  document.write('Procure a cordenação, precisamos conversar')
} else if (media < mediaMinima && media === 01 || 02 || 03 || 04) {
  document.write('Estude mais!')
}