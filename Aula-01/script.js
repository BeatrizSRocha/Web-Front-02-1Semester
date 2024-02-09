const altura=prompt("Digite a sua altura: ");
const peso=prompt("Digite o seu peso: ");

console.log(peso,altura)

function imc(){
    const result=peso/(altura*altura)
    console.log(result)
    return result
}
imc();