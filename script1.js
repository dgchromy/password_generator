//DOM elements 
const resultEl =document.getElementById("result");
const lengthEl =document.getElementById("length");
const uppercaseEl =document.getElementById("uppercase");
const lowercaseEl =document.getElementById("lowercase");
const numbersEl =document.getElementById("numbers");
const symbolsEl =document.getElementById("symbols");
const generateEl =document.getElementById("generate");
const clipboardEl =document.getElementById("clipboard");


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,


};
// generate event listen.//


generateEl.addEventListener("click", () => {
 const length = +lengthEl.value; 
 const hasLower = lowercaseEl.checked;
 const hasUpper = uppercaseEl.checked;   
 const hasNumber = numbersEl.checked;   
 const hasSymbol = symbolEl.checked;      
 
 resultEl.innerText = generatePassword(
     hasLower,
     hasNumber,
     hasUpper,
     hasSymbol,
     length
     );
    
});

//clipboard copy function
clipboardEl.addEventListener("click", () =>{
    const textarea = document.createElement("textarea");
    const password = resultEL.innerText
    if(!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy")
    textarea.remove();
    alert("Copied to clipboard");
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
if (typescount === 0) {
    return "";
}
for(let i = 0; i< length; i += typesCount){
    typesArr.forEach(type =>{
        const funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName]();
    });
 }
 const finalPassword = generatedPassword.slice(0, lenght);

return finalPassword;
}
 // ".filter is a high order array method that we loop threw each item based on a true or flase value will filter out if it is true or false  "//

// Generator functions - http://www.net-comber.com/charset.html

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




