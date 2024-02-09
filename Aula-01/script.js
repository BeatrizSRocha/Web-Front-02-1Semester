const altura=prompt("Digite a sua altura: ");
const peso=prompt("Digite o seu peso: ");

console.log(peso,altura)

function imc(){
    const result=peso/(altura*altura)
    console.log(result)
    return result
}
imc();
function vp(result){
    if (result<=18,5){
        console.log('Baixo peso')
    }
    else if (result==18,5 && result >= 24,99){
        console.log('Normal')
    }
    else if (result){
        console.log('Sobrepeso')
    }
    else{
        console.log('Obesidade')
    }
}