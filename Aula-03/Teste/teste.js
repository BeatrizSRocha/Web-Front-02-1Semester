const btn1=document.querySelector('button')
// Pega a lista de filmes
const listaFilmes=document.querySelector('#listFilmes')
// Cria o elemento li
const itemLista=document.createElement('li')

btn1.addEventListener('click',()=>{
    listaFilmes.append(itemLista) // Adicionando li na lista
})

// btn1.addEventListener('click',()=>{
//     window.alert("Clicouu!")
// })