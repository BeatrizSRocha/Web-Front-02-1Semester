// Criando variáveis
const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv")
const card = document.querySelector(".card")

// Criando funções
tirarDiv.addEventListener("click", function(){
    alert("oláaaaa");
})

voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
})