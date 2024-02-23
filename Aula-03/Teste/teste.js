const btn1=document.querySelector('button')

// Pega a lista de filmes
const listaFilmes=document.querySelector('#listaFilmes')

// Cria o elemento li
const itemLista=document.createElement('li') // Create Element => cria um novo elemento

// Pega o input
const textoUsuario=document.querySelector('#filmeInput')

btn1.addEventListener('click',()=>{
    listaFilmes.append(itemLista) // Adicionando li na lista
    itemLista.innerHTML=textoUsuario.value // Adiciona o texto do input na lista
    itemLista.classList.add(active) // Adiciona uma classe
    itemLista.style.backgroundColor="red" // Muda o CSS
})

// btn1.addEventListener('click',()=>{
//     listaFilmes.append(itemLista) // Adicionando li na lista
//     itemLista.innerHTML='Harry Potter'
// })

// btn1.addEventListener('click',()=>{
//     window.alert("Clicouu!")
// })