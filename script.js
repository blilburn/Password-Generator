// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/*let confirmSpecialCharacters = confirm("Do you want to use special characters?")*/


  /*move these arrays to the inside of the function*/
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specialChar = ["/", "+", ",", "<", ">", "!", "~", "-", "?", ".", "*", "%", "&"];

/**
 * generate a password based on certain criteria
 */
function generatePassword() {

  // Password is currently blank! We need to make a better one
  
  /*I added [] to this to make it an array. This might not have worked. You can change it back to ()*/
  let password = [];

  let passwordLength = prompt("How long do you want your password to be:");

  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8-128 characters");
    passwordLength = prompt("How long do you want your password to be:");
  }
  alert("Your password will have " + passwordLength + " characters");

  let confirmUpperCase = confirm("Do you want to use upper case letters?")

  let confirmLowerCase = confirm("Do you want to use lower case letters?")

  let confirmNumbers = confirm("Do you want to use numbers?")

  let confirmSpecialCharacters = confirm("Do you want to use special characters?")

  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacters === false && confirmNumbers === false) {
    alert("You must choose at least one parameter");

    confirmUpperCase = confirm("Do you want to use upper case letters?")

    confirmLowerCase = confirm("Do you want to use lower case letters?")

    confirmNumbers = confirm("Do you want to use numbers?")

    confirmSpecialCharacters = confirm("Do you want to use special characters?")
  }

  /*let passwordChar = []*/

  if (confirmSpecialCharacters) {
     /*password is a string. SpecialChar is an array. Change password to an array and name PasswordOptions*/
    password = password.concat(specialChar)
  }

  if (confirmNumbers) {
    password = password.concat(number)
  }

  if (confirmLowerCase) {
    password = password.concat(alphaLower)
  }

  if (confirmUpperCase) {
    password = password.concat(alphaUpper)
  }

  console.log(password)

  let passwordRandom = ""

  for (let i = 0; i < passwordLength; i++) {
    passwordRandom = passwordRandom + password[Math.floor(Math.random() * password.length)];
    console.log(passwordRandom);
  }
  /*if you don't change to password options above then change return password to passwordRandom or may passwordOptions?*/
  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
