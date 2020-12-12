let txtNome = document.getElementById('nomealuno');
let senha = document.getElementById('senha');
txtNome.focus();

function validarNome(nome) {
    if (nome == '' || nome == ' ' || nome == null) {
        return false;
    }

    let vetNome = nome.split(' ');

    if (vetNome.length > 1) {
        return true;
    } else {
        return false;
    }
}


function obterSobrenome(nome) {
    let vetNome = nome.split(' ');

    let ultimo = vetNome.pop();
    let minusculo = ultimo.toLowerCase();

    return minusculo;
}

function contarVogais(nome) {
    let vogais = ['a', 'á', 'â', 'ã', 'e', 'é', 'ê', 'i', 'í', 'o', 'ó', 'ô', 'õ', 'u', 'ú', 'ü'];
    let vetNome = nome.toLowerCase().split('');
    let quantVogais = 0;

    for (let i = 0; i < vetNome.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if (vetNome[i] == vogais[j]) {
                quantVogais++;
            }
        }
    }

    let novoNumero;
    if (quantVogais % 10 == 0) {
        novoNumero = String((quantVogais / 100).toFixed(2));
    } else {
        novoNumero = String(quantVogais / 100);
    }
    novoNumero = novoNumero.split('');

    let texto = '';
    for (let i = 2; i < novoNumero.length; i++) {
        texto += novoNumero[i];
    }

    return texto;
}

function exibirSenha() {
    txtNome.focus();
    senha.innerHTML = '';

    let nome = txtNome.value;
    txtNome.value = '';

    if (!validarNome(nome)) {
        alert('Insira um nome completo!');
        return;
    }

    let sobrenome = obterSobrenome(nome);
    let vogais = contarVogais(nome)

    senha.innerHTML = `Senha Inicial: ${sobrenome}${vogais}`;
}

document.getElementById('gerarSenha').addEventListener('click', exibirSenha);
