//Trazendo o prompt-sync para o projeto - npm i prompt-sync
const prompt=require ('prompt-sync')()
function getUserInfo(){
    let altura=parseFloat(prompt("Digite sua altura"))
    let peso=parseFloat(prompt("Digete seu peso"))

    return{ // Objeto
        pesoInformado: peso,
        alturaInformada: altura
    }
}
function calcImc(alturaDoUsuario,pesoDoUsuario){
    return pesoDoUsuario/alturaDoUsuario**2
}
function main(){
    let peso=getUserInfo().pesoInformado
    // Variável declarada -> informação -> propriedade
    let altura=getUserInfo().alturaInformada
    let imc=calcImc(altura,peso)
    console.log(`Seu IMC é ${imc}`) // Precisa ser dentro de crases
}
main()

// Função Print
function imprimir(idade){
    console.log(idade)
}
const idade=idade => console.log(idade) // Função reduzida

// Função click
btn1.addEventListener('click',()=>{
    console.log("Hello")
})