
var numbers="123456789".split("");
console.log(numbers);

var specialCharacters="!@#$%&=+".split("");
console.log(specialCharacters);

var lowerCase ="abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerCase);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase);

var passwordOptions = []

var userPassword = ""


function generatePassword() {
  
  var passwordLength = prompt("How many characters would you like your password to consist of? min=10 max=100");
  console.log(passwordLength);

  if (passwordLength < 10 || passwordLength > 100) {
    alert("Please choose a number greater than 10 and less than 100.")
  }

  else{
    var conNumbers= confirm("Would you like numbers?");
    console.log(conNumbers);
    if (conNumbers) {
      passwordOptions= passwordOptions.concat(numbers);
      console.log(passwordOptions); 
    }
  
    var conSC= confirm("Would you like special characters?");
    console.log(conSC);
    if (conSC) {
      passwordOptions= passwordOptions.concat(specialCharacters);
      console.log(passwordOptions); 
    }

    var conLC = confirm("Would you like lowercase letters?");
    console.log(conLC);
    if (conLC) {
      passwordOptions= passwordOptions.concat(lowerCase);
      console.log(passwordOptions); 
    }
  
    var conUC = confirm("Would you like uppercase letters?");
    console.log(conUC);
    if (conUC) {
      passwordOptions= passwordOptions.concat(upperCase)
      console.log(passwordOptions); 
    }
  } 
 
  for (var i =0; i < passwordLength; i++) {
    var calc= Math.floor(Math.random() * passwordOptions.length);
    userPassword += passwordOptions[calc]
    console.log(userPassword);
  }
  passwordText.textContent= userPassword


}


var passwordText= document.querySelector("#password")

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password)
  }


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click",function(event){
    event.preventDefault();
    generatePassword();
})
