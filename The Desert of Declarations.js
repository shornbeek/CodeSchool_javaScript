//CodeSchool.com
//JavaScript  The Desert of Declaration Level 4
//Stephen Hornbeek


//A Basic Multiplication Function
function  multiplyTrio (a,b,c){
 return a*b*c; 
}


//Calling Functions  (From the command line)
multiplyTrio (8,4,10)


//More Declarations
function maxOf2(a,b){
if (a>b){
return(a);
} 
if (b>a){
return(b);
} 
if (a==b){
return(a);
}
}


//Refactoring for Efficiency and Legibility
function mystery(x, y) {
  return (4 * x * y) +(3 * y + 5);
}


//Problem Solving with Functions I
function feedPerRanger (sheepPopulation, parkRangers) {
  var feed = (sheepPopulation * 2) / parkRangers;
  alert("Each Park Ranger should load " + feed + " lbs of feed today.");
}


//Problem Solving with Functions II
function changePowerTotal(totalPower, genID, genStatus, genPower) {
  if (genStatus == "on") {
    totalPower += genPower;
    alert("Generator #" + genID + " is now " + genStatus + ", adding " + genPower + " MW, for a total of " + totalPower + " MW!");
  } else if (genStatus == "off") {
    totalPower -= genPower;
    alert("Generator #" + genID + " is now " + genStatus + ", removing " + genPower + " MW, for a total of " + totalPower + " MW!");
  }
  return totalPower;
}



//End Level
