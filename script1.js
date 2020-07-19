//DOM elements 
const outputEL = document.getElementById("result");
const passLength = document.getElementById("length");
const upperCaseBtn = document.getElementById("uppercase");
const lowerCaseBtn = document.getElementById("lowercase");
const numerBtn = document.getElementById("number");
const symbolBtn = document.getElementById("symbol");
const generatePassBtn = document.getElementById("generate");
const copyBtnEl = document.getElementById("copy");


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper, 
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

copyBtnEl.addEventListener("click", () => {
    const textBox = document.createElement("textBox");
    const password = outputEL.innerText;
    if(!password){
        return;
    }
    textBox.value = password;
    document.body.appendChild(textBox);
    textBox.select();
    document.execCommand("copy");
    textBox.remove();
    alert("Copied");
});

// generate event listen.//


generatePassBtn.addEventListener("click", () => {
 const length = +passLength.value; 
 const lower = lowerCaseBtn.checked;
 const upper = upperCaseBtn.checked;   
 const number = numerBtn.checked;   
 const symbol = symbolBtn.checked;      
 
 outputEL.innerText = generatePassword(
     lower,
     upper,
     number,
     symbol,
     length
     );
    
});

// generate event listen.//
 function generatePassword(lower, upper, number, symbol, length){
    //1. intiate pass variable 2. filter out unchecked types 3. loop over the lenght call generator functionfor each type
//add final pass to the pw var and return//
 let generatePassword ="";

const typesCount = lower + upper + number + symbol;

const typesArr = [ {lower}, {upper}, {number}, {symbol}].filter
(
    item =>Object.values(item) [0]
);
if (typesCount === 0) {
    return "";
}
for(let i = 0; i< length; i += typesCount){
    typesArr.forEach(type =>{
        const funcName = Object.keys(type)[0];

        generatePassword += randomFunc[funcName]();
    });
 }
 const userPassword = generatePassword.slice(0, length);

return userPassword;
}
 // ".filter is a high order array method that we loop threw each item based on a true or flase value will filter out if it is true or false  "//

function getRandomLower() { 
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() { 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

function getRandomNumber() { 
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }

function getRandomSymbol() {
     const symbols = "!@#$%^&*(){}+?=";
     return symbols[Math.floor(Math.random() * symbols.length)];
  }




