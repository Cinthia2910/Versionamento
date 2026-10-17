let selecionado = document.querySelector('.lista')
console.log(selecionado)

//querySelector() retorna o primeiro item com o seletor CSS especificado
//seletor css = elemento, id, classe

let metodoAll = document.querySelectorAll('.lista')
console.log(metodoAll)

//querySelectorAll() retorna todos os itens com o seletor CSS especificado

let titulo = document.querySelector('h1')
titulo.textContent = 'Oremos'

metodoAll.forEach(function(metodoAll){
    metodoAll.computedStyleMap.color='blue'
})

function soma(){
    let resultado = a + b
    console.log(resultado)
}

soma(6,9)
soma(2,4)
soma(5,9)

let subtracao = function(){
    let resultado = 2 - 1
    console.log(resultado)
}

let multiplicacao = () =>{
    let resultado = 2 * 2
    console.log(resultado)
}

multiplicacao()