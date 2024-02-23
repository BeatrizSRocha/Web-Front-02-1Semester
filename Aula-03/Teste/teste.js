const btn1=document.querySelector('button')
// Pega a lista de filmes
const listaFilmes=document.querySelector('#listaFilmes')
// Cria o elemento li
const itemLista=document.createElement('li') // Create Element => cria um novo elemento

btn1.addEventListener('click',()=>{
    listaFilmes.append(itemLista) // Adicionando li na lista
    itemLista.innerHTML='Harry Potter'
})

// btn1.addEventListener('click',()=>{
//     window.alert("Clicouu!")
// })