const form = document.getElementById('formulario-agenda')
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    contagemDeNumeros();
});

function adicionaLinha() {
    const inputContato = document.getElementById('contato');
    const inputTelefone = document.getElementById('telefone');

    if (telefones.includes(inputTelefone.value)) {
        alert(`O Numero: ${inputTelefone.value} já foi inserido`);
    } else {

    nomes.push(inputContato.value);
    telefones.push(inputTelefone.value);
    
    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function contagemDeNumeros() {
    const  total = telefones.length;
    document.getElementById('salvos').innerHTML = total;
}
