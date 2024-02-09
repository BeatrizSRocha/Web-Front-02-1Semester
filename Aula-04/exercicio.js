/*
- Abaixo do array 'frutas', verifique se 'abacaxi' existe no array. Se existir, exiba no console a mensagem "A string 'abacaxi'
existe no array frutas.";
- Se 'abacaxi' não existir, verifique se 'pera' existe no array. Se existir, exiba no console a mensagem "A string 'pera'
existe no array frutas.";
- Se nenhuma das duas frutas existirem no array, exiba no console a mensagem "Nem pera e nem abacaxi existem no array
'frutas'.";
*/

let fruits = ["morango", "banana", "mamão", "pera"];
if (fruits.includes('abacaxi')){
    console.log('A string abacaxi existe no array frutas.');
} else if (fruits.includes('pera')){
    console.log('A string pera existe no array frutas.');
} else {
    console.log('A string pera no array frutas.');
}
