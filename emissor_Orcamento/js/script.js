
const btnGerar = document.querySelector('#gerarPDF');
const btnAdd = document.querySelector('#btnAdd')


btnGerar.addEventListener("click", () => {
    //Pega o conteudo na tela a ser impresso
    const content = document.querySelector('.container-principal')

    //configurações de impressão
    const options = {
        margin: [2.5, 2.5, 2.5, 2.5],
        filename: "orcamento.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };


    //gerar e baixar o pdf

    html2pdf().set(options).from(content).save()


})



btnAdd.addEventListener('click', () => {

    const tbody = document.querySelector('tbody')
    const novaLinha = document.createElement('tr')
    const campoItem = document.createElement('td')
    const campoDesc = document.createElement('td')
    const campoValor = document.createElement('td')


    campoItem.innerHTML = `<input type="text" placeholder="Nº">`
    campoDesc.innerHTML = `<input type="text" placeholder="Descrição">`
    campoValor.innerHTML = `<input type="text" placeholder="Valor Serviço">`

    novaLinha.appendChild(campoItem);
    novaLinha.appendChild(campoDesc);
    novaLinha.appendChild(campoValor);

    tbody.appendChild(novaLinha)


})

const impItem = document.querySelectorAll(".impItem")
const impServico = document.querySelectorAll(".impServico")
const impValor = document.querySelectorAll('.impValor')

function limparCampos() {
    const veiculo = document.querySelector('#impVeiculo');
    const cor = document.querySelector('#impCor');
    const cliente = document.querySelector("#impCliente")


    veiculo.value = ""
    cor.value = ""
    cliente.value = ""
    impItem[0].value = ""
    impItem[1].value = ""
    impItem[2].value = ""
    impItem[3].value = ""
    impItem[4].value = ""
    impServico[0].value = ""
    impServico[1].value = ""
    impServico[2].value = ""
    impServico[3].value = ""
    impServico[4].value = ""
    impValor[0].value = ""
    impValor[1].value = ""
    impValor[2].value = ""
    impValor[3].value = ""
    impValor[4].value = ""
}
