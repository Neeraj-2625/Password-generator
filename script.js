const passwordBox=document.querySelector('input');

const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='[=/?@#$%^&*!~+]';

const allChar=upperCase+lowerCase+numbers+symbols;

const length=12;

function generatePass(){
    let password='';

    password+=upperCase[Math.round(Math.random()*upperCase.length)];
    password+=lowerCase[Math.round(Math.random()*lowerCase.length)];
    password+=numbers[Math.round(Math.random()*numbers.length)];
    password+=symbols[Math.round(Math.random()*symbols.length)];
  
    while(password.length<length){
        password+=allChar[Math.round(Math.random()*allChar.length)];
    }

    passwordBox.value=password;
}

function selectPass(){
    passwordBox.select();
    document.execCommand('copy');
}
