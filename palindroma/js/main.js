function palindrome(str){
   str = str.toLowerCase().replace(/\W/ , '');
   let len = str.length;
   for(let i = 0 ; i < len/2 ; i++){
       if(str[i] !== str[len - 1 - i]){
           return false;
       }
   }
   return true;
}
let userWord = prompt('inserisci la tua parola');
userWord = palindrome(userWord);
console.log(userWord);