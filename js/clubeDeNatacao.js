let txtNome = document.getElementById('nome');
let txtIdade = document.getElementById('idade');
let btnCategorizar = document.getElementById('btnCategorizar');
btnCategorizar.addEventListener('click', categorizar);
let descricao = document.getElementById('descricao');
txtNome.focus();

function categorizar() {
    descricao.innerHTML = '';
    let nome = txtNome.value;
    let idade = parseInt(txtIdade.value);

    if (nome == '' || nome == ' ' || nome == null) {
        alert('Insira um nome válido!');
        txtNome.value = '';
        txtNome.focus();
        return;
    } else if (isNaN(idade) || idade < 1) {
        alert('Insira uma idade válida!');
        txtIdade.value = '';
        txtIdade.focus();
        return;
    }

    let tracos = retornarTracos(nome);
    let categoria = categorizarAluno(idade);

    txtNome.value = '';
    txtIdade.value = '';

    descricao.innerHTML = `${nome}\n${tracos}\nCategoria: ${categoria}`;

    txtNome.focus();
}

function retornarTracos(nome) {
    let texto = '';
    let hifenizado = nome.split('').map(function(letra) {
        if (letra == ' ') {
            return ' ';
        } else {
            return '-';
        }
    });
    hifenizado.forEach(function(letra) {
        texto += letra;
    })
    return texto;
}

function categorizarAluno(idade) {
    if (idade <= 12) {
        return 'Infantil';
    } else if (idade > 12 && idade < 18) {
        return 'Juvenil';
    } else {
        return 'Adulto';
    }
}