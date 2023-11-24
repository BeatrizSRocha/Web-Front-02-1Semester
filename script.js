const button=document.querySelector("button");
const inputNota=document.querySelector("#nota");

//criando um elemento p
const pMensagem=document.createElement("p");
button.addEventListener("click",()=>{
    event.preventDefault();
    console.log(inputNota.value);

    //validações
    if (inputNota.value.trim()===''){
        pMensagem.textContent="Campo obrigatório";
        inputNota.insertAdjacentElement("afterend",pMensagem)
        pMensagem.setAttribute("class","error")
        return false;
    }
})