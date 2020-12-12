let vetCompras = [];
let txtProduto = document.getElementById('produto');
let btnAdicionar = document.getElementById('adicionar');
btnAdicionar.addEventListener('click', adicionar)
let btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', limpar);
let produtosAdd = document.getElementById('produtosAdd');

function adicionar() {
    let produto = txtProduto.value;
    txtProduto.value = '';
    txtProduto.focus();
    if (produto == '' || produto == ' ' || produto == null) {
        alert('Insira um nome de produto válido!');
        exibir();
        return;
    }
    vetCompras.push(produto);
    exibir();
}

function limpar() {
    if (confirm('Tem certeza que deseja apagar TODOS os itens da lista?')) {
        vetCompras = [];
    }
    exibir();
}

function exibir() {
    txtProduto.focus();
    if (vetCompras.length == 0) {
        produtosAdd.innerHTML = '';
        return;
    }
    let texto = 'Produtos Adicionados\n-----------------------\n';
    vetCompras.forEach(function (prod) {
        texto += prod + '\n';
    })

    produtosAdd.innerHTML = texto;
}