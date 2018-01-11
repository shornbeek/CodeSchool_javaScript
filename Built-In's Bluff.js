//CodeSchool.com
//JavaScript  Built-In's Bluff Level 3
//Stephen Hornbeek


//Pop-Up Windows I
var parkIsOpen = false;

if (parkIsOpen) {
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}


//Pop-Up Windows II
var userAge = prompt ("What's your age, user?");


//Pop-Up Windows III
var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");


//An Entry Confirmation Loop
var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while (ageIsCorrect == false) {
  if (confirm("You entered " + userAge + ". Is this correct?")) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  } else {
    userAge = prompt("What's your age, user?");
  }
}


//End Level


