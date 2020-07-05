// Assignment Code
var generateBtn = document.querySelector("#generate");
var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
const specailChar = ["!", "#", "&"];
const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];
const loverCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

// Write password to the #password input
function passwordOptions()
{
    var passwordLength = prompt("how many characters will you want in your password?");
    console.log(passwordLength);
    let specails = confirm('would you like specail characters in your password?');
    let upper = confirm('would you like upper case characters in your password?');
    let lower = confirm('would you like lower case  characters in your password?');
    let nums = confirm('would you like numbers characters in your password?');

    let options = {
        pLength: passwordLength,
        specails,
        upper,
        lower,
        nums
    };
    return options;
}

// passwordOptions()
function generatePassword()
{
    let options = passwordOptions();
    let finalPassword = [];
    let charsForPassword = [];
    if (options.specails === true)
    {
       charsForPassword= charsForPassword.concat(specailChar);
    }
    for (let i = 0; i < options.pLength; i = i + 1)
    {

finalPassword.push(charsForPassword[Math.floor(Math.random() * charsForPassword.length)])
    }
    console.log(charsForPassword);
    console.log(finalPassword);
}
generatePassword();
function writePassword()
{
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
