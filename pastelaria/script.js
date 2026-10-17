function mostraPedido(recheios, resumo, op1, op2){
    let configuracao = `O recheio é: ${recheios}`
    resumo.innerHTML = configuracao

    if(op1.checked){
        configuracao += ` + ${op1.value}`
    }

    if(op2.checked){
        configuracao += ` + ${op2.value}`
    }
    resumo.innerHTML = configuracao
}