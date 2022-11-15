const userChoice = prompt('pari o dispari');
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
function randomNumber(min,max){
    let random = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return random;
}
console.log(userNumber);
let manchineNumber = randomNumber(1 , 5);
console.log(manchineNumber);
let total = userNumber + manchineNumber;
console.log(total);
if(userNumber<1 || userNumber>5){
    console.log('attenzione hai selezionato un numero non compreso tra 1 e 5');
    
}else{
    if(userChoice.toLowerCase() != "pari" && userChoice.toLowerCase() != "dispari"){
        console.log('attenzione non hai dato una scelta')
    }else if(total % 2 === 0 && userChoice.toLowerCase()==='pari'){
        console.log('utente ha vinto');
    
    }else if(total % 2 !=0 && userChoice.toLowerCase()==='dispari'){
        console.log('utente ha vinto')
    
    }else{
        console.log('il computer ha vinto')
    }
}