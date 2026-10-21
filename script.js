// Lista Inicial de estudantes armazenada em um Array

const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniel Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinícius"
];

// Obtendo as referências dos elementos HTML pelo identificador
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    // Limpa o conteúdo atual da lista para evitar duplicações indesejadas
    elementoLista.innerHTML = "";

    // Percorre cada posição do Array usando o laço for
    for (let i = 0; i < listaDeEstudantes.length; i++) {
        // Cria um elemento <li> novo em memória
        const itemLi = document.createElement("li");//<li></li>
        itemLi.className = "item-nome"; //<li class="item-nome"></li>

        // Define o conteúdo interno do item com nome e sua respectiva ordem visual
        itemLi.innerHTML = `
        <span>${listaDeEstudantes[i]}</span>
        <span class="posicao-tag">#${i + 1}</span>
        `;

        // Anexa o item criado dentro da tag <ul> da página
        elementoLista.appendChild(itemLi); // <ul><li><span>Beatriz...<span>...
    }

    // Atualiza a barra de status com o total de registros lidos pelo laço
    elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados`;
    elementoContador.style.color = "#16a34a";
    
    console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados.`);
}

function limparLista() {
    elementoLista.innerHTML = "";
    elementoContador.innerText = `Lista limpa pelo usuário. Nenhum nome na tela.`;
    elementoContador.style.color = "#475569";
    console.log("Tela Limpa");
}

exibirListaAutomaticamente();

function adicionarNovoNome()
{
    
    const CampoNome = document.getElementById("campoNovoNome");
    const nomeAdicionado = CampoNome.value;

    

    if ((nomeAdicionado) === "") {
        elementoContador.innerText = "Digite um nome!"
        elementoContador.style.color = "#ff0000ff"
    }
    else {
    let nomeDuplicado = false;
   
    for (let i = 0; i < listaDeEstudantes.length; i++)
    {
        if (listaDeEstudantes[i].toLowerCase() === nomeAdicionado.toLowerCase())
        {
            nomeDuplicado = true;
            break;
        }
    }

    if (nomeDuplicado) {
        elementoContador.innerText = "Este nome já está na lista!"
        elementoContador.style.color = "#ff0000ff"
    }
    else {
        listaDeEstudantes.push(nomeAdicionado);
        exibirListaAutomaticamente();
        CampoNome.value = "";
        CampoNome.focus();
    }

}
}

function exibirOrdemInvertida() 
{
    elementoLista.innerHTML = "";

    let contador = listaDeEstudantes.length - 1;
    while (contador >= 0)
    {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";

        itemLi.innerHTML = 
        ` <span>${listaDeEstudantes[contador]}</span> <span class="posicao-tag">#${contador + 1}</span>`;

        elementoLista.appendChild(itemLi);

        contador--;
    }
}