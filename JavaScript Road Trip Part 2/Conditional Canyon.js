//CodeSchool.com
//JavaScript  Conditional Canyon Level 2
//Stephen Hornbeek



//A Basic Conditional
var num = 10;
while(num > 0) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num--;
}


//Using Boolean Flags in Conditionals
var parkIsOpen = true;

 if (parkIsOpen) {
  console.log('Welcome to the Badlands National Park! Try to enjoy your stay.');
 }
 else {
  console.log("Sorry, the Badlands are particularly bad today. We\'re closed!");
 }

 //A Loopy Problem - Problem Solving with Conditionals
 var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

if (numSheep > 10000) {
  var sheepToRemove = numSheep / 2;
  console.log("Removing " + sheepToRemove + " sheep from the population.");
  numSheep = numSheep - sheepToRemove;
}

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


//Loop Echo - Too Many Sheep! (or, the else if statement)
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
    var sheepToRemove = numSheep * .75;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;
  } else if (numSheep > 10000) {
    var sheepToRemove = numSheep * .5;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;    
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//Some Dam Complex Conditionals! 
var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
  if (currentGen % 2 == 0 && currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen % 2 == 0 && currentGen >= 5) {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  }
}


//End Level
