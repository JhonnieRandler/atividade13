let precoVacina = document.getElementById('valorVacina');
let descont = document.getElementById('desconto');
let paga = document.getElementById('pagar');
let simNao = null;

function validarValor(precoVacina) {
    if (!isNaN(precoVacina)) {
        return true;
    } else {
        return false;
    }
}

function calcularDesconto() {

    descont.innerHTML = '';
    paga.innerHTML = '';

    let preco = parseFloat(precoVacina.value);


    if (!validarValor(preco)) {
        alert('Insira um valor Valido!!!');
        precoVacina.value = '';
        precoVacina.focus();
        return;
    }

    let valorF = 0;

    var top = document.getElementById("convenioo");


    if (simNao == null) {
        alert('Escolha sim ou não para a opção de convênio!');
        return;
    } else if (!simNao) {
        descontar = preco * 0.10;
        valorF = preco - descontar;
        descont.innerHTML = `Desconto R$: ${descontar.toFixed(2)}`;
        paga.innerHTML = `A pagar: R$: ${valorF.toFixed(2)}`;
    } else {
        if(top.options[top.selectedIndex].value === 'amigoanimais'){
            descontar = preco * 0.20;
            valorF = preco - descontar;
            descont.innerHTML = `Desconto R$: ${descontar.toFixed(2)}`;
            paga.innerHTML = `A pagar: R$: ${valorF.toFixed(2)}`;
        }else {
            descontar = preco * 0.50;
            valorF = preco - descontar;
            descont.innerHTML = `Desconto R$: ${descontar.toFixed(2)}`;
            paga.innerHTML = `A pagar: R$: ${valorF.toFixed(2)}`;
        }
    }
        
    precoVacina.value = '';
    precoVacina.focus();
}


document.getElementById('calculaDesconto').addEventListener('click', calcularDesconto);




document.getElementById('sim').addEventListener('click', testeSim);
document.getElementById('nao').addEventListener('click', testeNao);

function testeSim() {
    document.getElementById('convenioo').disabled = false;
    simNao = true;
}

function testeNao() {
    document.getElementById('convenioo').disabled = true;
    simNao = false;
}