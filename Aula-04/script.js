const listaFilmes = document.querySelector('#listaFilmes')
const filmes = ['Questão de Tempo','Jogos Vorazes: Em Chamas','Os Intrumentos Mortais: Cidade dos Ossos','A Cinco Passos De Você','Gente Grande 2']
filmes.pop() // Remover o último item da lista

        // Mesma coisa:   ()=>
window.onload = function carregarFilmes(){ // Quando a página for carregada irá rodar a função
    for(let i=0; i<filmes.length;i++){ // Irá parar de rodar quando o i for menor que o array
        let itemLista=document.createElement('li') // Criando um novo elemento
        listaFilmes.append(itemLista) // Adicionado  na lista
        itemLista.innerHTML=filmes[i] // Colocar i para cada vez que rodar, adicionar um novo filme
    }
} 