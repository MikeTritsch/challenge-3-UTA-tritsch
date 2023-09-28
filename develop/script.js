// Assignment Code - Below creates a reference to the generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Do not touch
// The button will run the password function

function generatePassword() {
    var numChar = window.prompt("Enter desired password length (Min. of 8, Max of 128)");

    if (numChar < 8 || numChar > 128) {
        window.alert("Please enter a number between 8 and 128");
        return;
    }

    console.log(numChar);

    var includeNum = window.confirm("Would you like to add numbers?");
    var includeUpper = window.confirm("Would you like to use upper-case letters?");
    var includeLower = window.confirm("Would you like to use lower-case letters?");
    var includeSpec = window.confirm("Would you like to use special characters?");

    var numberArray = [0, 1, 2, 3 ,4, 5, 6, 7, 8, 9];
    var upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var specialChar = ["!","#", "$", "%", "&", "(", ")", "*", "+","-","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
    var objectArray = [];

    if (includeNum == true) {
        objectArray.push(...numberArray);
    }

    if (includeUpper == true) {
        objectArray.push(...upperAlphabet);
    }

    if (includeLower == true) {
        objectArray.push(...lowAlphabet);
    }

    if (includeSpec == true) {
        objectArray.push(...specialChar);
    }

    for (x = 0; x < numChar; x++) {
        var chosenArr = objectArray[Math.floor(Math.random() * objectArray.length)];
        var newArr = [chosenArr];
    }

    return password;
}













// generatePassword(){
  // All your code here
// var numChar = window.prompt (will generate textbox)
// console.log(numChar);
// var includeNum = window.confirm true/false

// Array for each character type
// var numArray = ['0', '1']

// if statement
// var options = [];
  // if true push/concat that array into a new array var

// for loop through options array based on required characters
  // Random index value for every loop
  // Google this: how to randomly choose a value from an array
  // var chosenArr = [];
  // turn arrau into string
//   return password;
// }