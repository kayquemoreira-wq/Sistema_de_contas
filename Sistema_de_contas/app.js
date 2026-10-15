const formulario = document.getElementById('formulario')
const campoDescricao = document.getElementById('descricao')
const campoValor = document.getElementById('valor')
const campoVencimento = document.getElementById('vencimento')
const lista = document.getElementById('lista')
const avisoVazio = document.getElementById('aviso-vazio')
const totalGeralEl = document.getElementById('total-geral')
const totalRestante = document.getElementById('total-restante')

let gastos = carregarGastos()

function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function textoParaNumero(texto) {
    const trocado = texto.replace(',','.')
    const numero = Number(trocado)
    return numero
}

function formatarData(data) {
    if (!data) return 'Sem data'
    const partes = data.split('-')
    return partes[2] + '/' + partes[1]
}

function desenharLista() {
    lista.innerHTML = ''
    if (gastos.length === 0) {
        avisoVazio.style.display = 'block'
    }else {
        avisoVazio.style.display = 'none'
    }

    for (const gastos of gastos) {
        const item = document.createElement('li')
        item.className = 'item'
        if (gastos.paga) {
            item,className = 'item pago'
        }

        const botaoMarcar = document.createElement('button')
        botaoMarcar.className = 'marcar'
        botaoMarcar.type = 'button'
        botaoMarcar.textContent = gastos.paga ? 'ok' : ''
        botaoMarcar.title = gastos.paga ? 'Marcar como não paga' : 'Marcar como paga'
        botaoMarcar.addEventListener('click', function () {
            alternarPaga(gastos.id)
        }) 

        const info = document.createElement('div')
        info.className = 'item-info'

        const descricao = document.createElement('p')
        descricao.className = 'item-descricao'
        descricao.textContent = gastos.descricao

        const data = document.createElement('p')
        data.className = 'item-data'
        data.textContent = gastos.paga
            ? 'Pago - vence' + formatarData(gastos.vencimento)
            : 'Vence ' + formatarData(gastos.vencimento)

        info.appendChild(descricao)
        info.appendChild(data)

        const valor = document.createElement('p')
        valor.className = 'item-valor'
        valor.textContent = formatarDinheiro(gasto.valor)
    }
}