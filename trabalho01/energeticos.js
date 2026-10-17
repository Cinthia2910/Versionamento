let produtos = {
    bally: { Marca: 'Bally', quantEstoque: 25, preco: 7.99, custo: 5.99 },
    monster: { Marca: 'Monster', quantEstoque: 15, preco: 8.99, custo: 6.50 },
    redBull: { Marca: 'Red Bull', quantEstoque: 30, preco: 11.99, custo: 7.00 }
}

let produtoAtual = produtos.bally

function selecao() {
    let opcaoSelecionada = document.getElementById('escolha').value
    produtoAtual = produtos[opcaoSelecionada]
    document.getElementById('qtdCompra').value = ''
    let spanDetalhes = document.getElementById('detalhesProduto')
    if (spanDetalhes) {
        spanDetalhes.innerText = ''
    }
    atualizar()
}

function atualizar() {
    document.getElementById('infoProduto').innerText = produtoAtual.Marca
    document.getElementById('infoPreco').innerText = `R$ ${produtoAtual.preco.toFixed(2)}`
    document.getElementById('infoEstoque').innerText = `${produtoAtual.quantEstoque} unidades`
    document.getElementById('produtoAdm').innerText = produtoAtual.Marca
    document.getElementById('estoqueAdm').innerText = `${produtoAtual.quantEstoque} unidades`
    
    let custoTotal = produtoAtual.quantEstoque * produtoAtual.custo
    let faturamentoTotal = produtoAtual.quantEstoque * produtoAtual.preco
    let lucroTotal = faturamentoTotal - custoTotal
    
    document.getElementById('custoTotal').innerText = `R$ ${custoTotal.toFixed(2)}`
    document.getElementById('faturar').innerText = `R$ ${faturamentoTotal.toFixed(2)}`
    document.getElementById('lucro').innerText = `R$ ${lucroTotal.toFixed(2)}`
    
    if (produtoAtual.quantEstoque < 20) {
        alert(`Atenção: Estoque baixo para ${produtoAtual.Marca}! (menos de 20 unidades: ${produtoAtual.quantEstoque})`)
    }
}

function calcularSimulacao() {
    let qtd = parseInt(document.getElementById('qtdCompra').value)
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.')
        return null
    }
    if (qtd > produtoAtual.quantEstoque) {
        alert('Quantidade solicitada indisponível em estoque!')
        return null
    }
    
    let totalSemDesconto = qtd * produtoAtual.preco
    let formaPagamento = document.getElementById('formaPagamento').value
    let textoResumo = ''
    
    if (formaPagamento === 'avista') {
        let valorComDesconto = totalSemDesconto * 0.95
        textoResumo = `Total (com 5% de desconto à vista): R$ ${valorComDesconto.toFixed(2)}`
    } else {
        let parcelas = parseInt(formaPagamento)
        let valorParcela = totalSemDesconto / parcelas
        textoResumo = `Total: R$ ${totalSemDesconto.toFixed(2)}\nPagamento em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`
    }
    
    alert(`Resumo do Pedido:\n${textoResumo}`)
    return qtd
}

function comprar() {
    let qtd = calcularSimulacao()
    if (qtd !== null) {
        produtoAtual.quantEstoque -= qtd
        alert('Compra realizada com sucesso!')
        document.getElementById('qtdCompra').value = ''
        atualizar()
    }
}

function adicionarEstoque() {
    let qtdInput = document.getElementById('quantAdd')
    let qtd = parseInt(qtdInput.value)
    if (isNaN(qtd) || qtd <= 0) {
        alert('Informe uma quantidade válida para adicionar ao estoque.')
        return
    }
    
    produtoAtual.quantEstoque += qtd
    qtdInput.value = ''
    alert('Estoque atualizado com sucesso!')
    atualizar()
}