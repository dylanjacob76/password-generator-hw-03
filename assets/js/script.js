// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password
function generatePassword() {
  //create variables for the password and empty array for generated password to go into
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = lowercaseLetters.toUpperCase();
  var numbers = "0123456789";
  var symbols = "!@#$%&*?";
  var generatedPassword = []

  //password length prompt
  var length = prompt("How long would you like your password?");

  //verify user entered length meets password criteria
  if (length < 8 || length > 128) {
    alert("Please enter a password length between 8 and 128 characters...");
    // generatePassword();
  }


  //lowercase letter confirm
  var lowercaseConfirm = confirm("Would you like lowercase letters in your password?");

  if (lowercaseConfirm) {
    generatedPassword.push(lowercaseLetters);
  }


  //uppercase letter confirm
  var uppercaseConfirm = confirm("Would you like uppercase letters in your password?");

  if (uppercaseConfirm) {
    generatedPassword.push(uppercaseLetters);
  }


  //numbers confirm
  var numbersConfirm = confirm("Would you like numbers in your password?");

  if (numbersConfirm) {
    generatedPassword.push(numbers);
  }


  //special characters confirm
  var symbolsConfirm = confirm("Would you like symbols in your password?");

  if (symbolsConfirm) {
    generatedPassword.push(symbols);
  }


  //all of the symbols are joined within one string
  generatedPassword = generatedPassword.join("");

  
  var result = "";
  
  for (let i = 0; i < length; i++) {
    result += generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
  }

  return result;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
