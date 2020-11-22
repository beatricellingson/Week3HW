// Assignment Code


// console.log("App connecting");

// var numbersString = "1234567890".split("");
// console.log(numbersString);

// var specialString = "!@#$%^&*()".split("");
// console.log(specialString);

// var lowerString = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(lowerString);

// var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// console.log(upperString);

// var availablePasswordOptions = [];

// var submitBtn = document.getElementById("subBtn");
// var passwordText = document.getElementById("password");
// submitBtn.addEventListener("click", function (event) {
// event.preventDefault();
// generatePassword();
// });


// function generatePassword() {
//   var passLength = prompt(
//     "Please enter the number of Password characters your like between 10 and 130"
//   );
//   passLength = parseInt(passLength);
//   if (passLength > 10 || passLength < 130) {
//     var addNumbers = confirm("Would you like numbers in your password?");
//     if (addNumbers) {
//       availablePasswordOptions = availablePasswordOptions.concat(numbersString);
//       console.log(availablePasswordOptions);
//     }
//     var addSpecialChars = confirm(
//       "Would you like Special Characters in your password?"
//     );
//     if (addSpecialChars) {
//       availablePasswordOptions = availablePasswordOptions.concat(specialString);
//       console.log(availablePasswordOptions);
//     }
//     var addLowerCase = confirm(
//       "Would you like Lowercase characters in your password?"
//     );
//     if (addLowerCase) {
//       availablePasswordOptions = availablePasswordOptions.concat(lowerString);
//       console.log(availablePasswordOptions);
//     }
//     var addUpperCase = confirm(
//       "Would you like Uppercase characters in your password?"
//     );
//     if (addUpperCase) {
//       availablePasswordOptions = availablePasswordOptions.concat(upperString);
//       console.log(availablePasswordOptions);
//     }
//     console.log("The available password options are:");
//     console.log(availablePasswordOptions);
//     var userPassword = "";
//     for (var i = 0; i < getPassLength; i++) {
//       var rand = Math.floor(Math.random() * availablePasswordOptions.length);
//       userPassword += availablePasswordOptions[rand];
//       console.log(userPassword);
//     }
//     console.log(userPassword);
//     passwordText.textContent = userPassword;
//   } else {
//     alert("Must be between 6 and 128");
//     passwordText.textContent = "";
//   }
// }




var numbers="123456789".split("");
console.log(numbers);

var specialCharacters="!@#$%&=+".split("");
console.log(specialCharacters);

var lowerCase ="abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerCase);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase);

var passwordOptions = []


function generatePassword() {
  
  var passwordLength= prompt("How many characters would you like your password to consist of? min=10 max=100");

  if (passwordLength < 10 || passwordLength > 100) {
    alert("Please choose a number greater than 10 and less than 100.")
  }

  else{
    var conNumbers= confirm("Would you like numbers?");
    console.log(conNumbers);
  
    var conSC= confirm("Would you like special characters?");
    console.log(conSC);

    var conLC = confirm("Would you like lowercase letters?");
    console.log(conLC);
  
    var conUC = confirm("Would you like uppercase letters?");
    console.log(conUC);
  }

}

//  Write password to the #password input
  

// // // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click",function(event){
  event.preventDefault();
  generatePassword();
})

