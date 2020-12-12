let modelo = document.getElementById('modelo');
let ano = document.getElementById('ano');
let preco = document.getElementById('preco');
let carroIdade = document.getElementById("carroIdade");
let precoVenda = document.getElementById("precoVenda");
modelo.focus();

function calculaPreco() {
    carroIdade.innerHTML = '';
    precoVenda.innerHTML = '';
    let modeloCarro = modelo.value;
    let anoFabricacao = parseInt(ano.value);
    let precoVeiculo = parseFloat(preco.value);
    let anoAtual = new Date();
    anoAtual = anoAtual.getFullYear();

    //Verificação
    if (modeloCarro == '' || modeloCarro == null || modeloCarro == ' ') {
        alert('Insira o modelo do carro');
        modelo.value = '';
        modelo.focus();
        return;
    } else if (isNaN(anoFabricacao) || anoFabricacao < 1884 || anoFabricacao > anoAtual) {
        alert('Insira um ano válido');
        ano.value = '';
        ano.focus();
        return;
    } else if (isNaN(precoVeiculo) || precoVeiculo < 0) {
        alert('Insira um preço válido!');
        preco.value = '';
        preco.focus();
        return;
    }
    
    let estadoVeiculo;
    let juros;
    if (anoAtual == anoFabricacao) {
        estadoVeiculo = "Novo";
        juros = 1.08;
    } else  if (anoAtual - anoFabricacao <= 2){
        estadoVeiculo = "Seminovo";
        juros = 1.10;
    } else {
        estadoVeiculo = "Usado";
        juros = 1.10;
    }

    let precoFinal = precoVeiculo * juros;
    
    modelo.value = '';
    ano.value = '';
    preco.value = '';
    carroIdade.innerHTML = `${modeloCarro} - ${estadoVeiculo}`;
    precoVenda.innerHTML= `Preço de Venda R$: ${precoFinal.toFixed(2)}`;
    modelo.focus();
}

document.getElementById('btnCalcula').addEventListener('click', calculaPreco);