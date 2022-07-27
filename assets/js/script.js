// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  let newPassword = [];
  let characterTypes = {
    letters: "abcdefghijklmnopqrstuvwxyz", // I can use letters.toUpperCase to make captial
    numbers: "0123456789",
    symbols: "`!@#$%^&*()<>?_+=/"
  }

  // character count
  let charCount = parseInt(prompt("How many characters would you like in your password?"))
  if (charCount > 8 || charCount < 128) {
    console.log(charCount);
  } else {
    alert("You must choose a password length between 8 & 128 charcters.")
  }

  // lowercase letters
  let charLowercase = confirm("Would you like lowercase letters in your password?");
  if (charLowercase) {
    
  }

  // uppercase letters

  // numbers

  // symbols

  // push to newPassword empty array

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
