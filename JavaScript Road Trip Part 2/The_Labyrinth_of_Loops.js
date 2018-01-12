//CodeSchool
//JavaScript  The_Labyrinth_of_Loops Level 1
//Stephen Hornbeek


//A Basic While Loop 
var num = 10;

while(num > 0) {
  console.log(num);
  num--;
}


//Problem Solving with Loop Operations
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep = numSheep * 4;
   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    monthNumber++;
}


//From a While Loop to a For Loop
for (var num = 10; num > 0;num--){
 console.log(num);
}


//From a While Loop to a For Loop II
var numSheep = 4;
var monthsToPrint = 12;

for (monthNumber = 1; monthNumber <= monthsToPrint ; monthNumber++){
  numSheep *= 4; 
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//These Dam Loops!
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
   console.log ("Generator #"+ currentGen + " is on, adding 62 MW, for a total of "+ totalMW +" MW!");
    currentGen++;
}

for( currentGen >= 5 ; currentGen <= totalGen ; currentGen++ ){
 totalMW += 124;
  console.log ("Generator #"+ currentGen + " is on, adding 124 MW, for a total of "+ totalMW + " MW!");
}


//End Level

