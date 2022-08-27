
let count = 0;
let display = document.querySelector('#display')
let botaoMais = document.querySelector('#botaoMais')
let botaoMenos = document.querySelector('#botaoMenos')

botaoMais.onclick = function () {
            count++
            display.innerHTML = count
        }

botaoMenos.onclick = function () {
            count--
            display.innerHTML = count
        }
