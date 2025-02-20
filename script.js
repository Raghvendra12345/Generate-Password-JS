let passwordbox=document.getElementById("password")
let length=12;
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let Symbol="!@#$%^&*~";
let allchar=upperCase+lowerCase+number+Symbol;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=Symbol[Math.floor(Math.random()*Symbol.length)];
   while(length>password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)];
    }
    passwordbox.value=password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}