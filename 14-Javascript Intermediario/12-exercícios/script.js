let count = 0
let display = document.querySelector('#display')
let botaoMais = document.querySelector('#botaoMais')
let botaoMenos = document.querySelector('#botaoMenos')

let increaseInterval
let decreaseInterval


botaoMais.onclick = function () {
    clearInterval(decreaseInterval)

    increaseInterval = setInterval(function () {
        count++
        display.innerHTML = count
    }, 500)
}


botaoMenos.onclick = function () {
    clearInterval(increaseInterval)

    decreaseInterval = setInterval(function () {
        count--
        display.innerHTML = count
    }, 500)

}






