// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword(){

 // Defining password length and checking to make sure its within length requirements

var ln = parseInt(prompt("How long would you like the password to be?"))
console.log(ln);
// Boolean for password length
var passLength, ans = false;


// While loop to garuntee proper length

while(passLength != true && ans != true){

  if (ln < 8 || ln > 128 || isNaN(ln)){
    ln = parseInt(prompt("Please enter a valid password length"));
  }
  

  else {
    passLength, ans = true;
  }

} 

  console.log(ln);

// Boolean for input validation

    var valid = false;

// Creating booleans for charector types and checking for valid input

while(valid != true){
  var up = confirm("Do you want uppercase letters?");
  var low = confirm("Do you want lowercase letters?");
  var sp = confirm("Do you want special characters?");
  var num = confirm("Do you want numbers?");

  if(up != true && low != true && sp != true && num != true){
    alert("Please select atleast one charecter type");
  }
  else{
    valid = true;
  }
}

// Creating character sets for each type 

  var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowLetters = upLetters.toLowerCase();

  var special = "!@#$%^&*"

  var numbers = "1234567890"

// Blank password variable to be updated

  var pass = "";

// Creating password
  for(var i = pass.length; i < ln; i++){

    if(up == true){
      pass += upLetters.charAt(Math.floor(Math.random() * upLetters.length));
      i = pass.length;
    }


    if(low == true && pass.length < ln){
      pass += lowLetters.charAt(Math.floor(Math.random() * lowLetters.length));
      i = pass.length;
    }



    if(sp == true && pass.length < ln){
      pass += special.charAt(Math.floor(Math.random() * special.length));
      i = pass.length;
    }



    if(num == true && pass.length < ln){
      pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
      i = pass.length;

    }

    // Logs to the console the current password after every loop

    console.log(pass);

  }

  // Returns generated password to paste to web page
  return pass;
}