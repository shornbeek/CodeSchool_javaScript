//CodeSchool.com
//JavaScript  Javascript RoadTrip Part 3
//1. Forest of FUnction Expressions Level 1
//Stephen Hornbeek 2018


	//1.2Changing Declarations to Expressions

//Code Given to Start the challenge
function forestFright() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
}

//Solution: I added a var runAway and moved the function into that new variable.
var runAway = function() {
var toAlert = "";
for (var i = 0; i < 5; i++) {
toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
 }
};



	//1.3Using Function Expressions with Parameters

//Code Given to Start the challenge

var people = /*//fill this in//*/;
var rain = /*//fill this in//*/;
var sharks = /*//fill this in//*/;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

//Solution: You need to ignore all the information in the fearGenerated function and just call the function "fearGenerated". Assign the 
// three varables as peramiters to the new varable "fear". final fear fucntion will call fearGenerated with 3 peraimters perople, rain, and sharks
var people = 100;
var rain = 2;
var sharks = 5;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);



	//1.4 Displaying Function Contents

//Code Given to Start the challenge - No Starting Code this challenge  

//Soultion: The goal is to call the function with an alert box. alert (name of function);
alert (fearGenerated);



	//1.5 Functions as Parameters, Arguments and Return Values

//Code Given to Start the challenge
  var fear = fearGenerated(numPeeps, rainInInches, numSharks);

  var fearMessage = function() {
  // Insert conditional statements here

  };

  function confirmRide(confirmToGo) {
    return confirmToGo();
  }

  // Call confirmRide with the fearMessage function
  var startRide = confirmRide(fearMessage);




//Soultion: If and if/else statments were added to the first setion where it says incert text. if statment test fear vs 200. 
//If else check for fear >= 200 and/ && fear is less then 300. the return conirmation messages were then retuen. one for if and one for else if.
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear < 200){
    return confirm("Fear Level: LOW \nStill wanna ride?");
  }
  else if(fear >= 200 && fear <= 300){
    return confirm("Fear Level: MEDIUM \n Think you'll make it?");
  }

};

function confirmRide(confirmToGo) {
  return confirmToGo();
}
  var startRide = confirmRide(fearMessage);


	//1.7 Using Map With Arrays

//Code Given to Start the challenge
var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];


//Soultion: Created a varable that was assigned to passengers with a function map that goes into the arrayCell. Return arrayCell lets me choose an item in the array. 
var modifiedNames = passengers.map(function(arrayCell) {
  return arrayCell[0] + " " + arrayCell[1];
});


	//1.8 Using Map With Arrays II

//Code Given to Start the challenge
var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];



//Soultion: I used map to go into the array. I then created a fucntion called name and an alert box that messeages a string and the name function that maps/pulls in the array of names.
modifiedNames.map(function(name) {
  alert("Yo, " + name + "!"); 
});


	//1.9 Expressions Inside Arrays

//Code Given to Start the challenge - No Starting Code this challenge  

//Soultion: 1 array was created called puzzlers. then 4 functions with returns were placed inside of the array. function input peramiter was used with the formulas in the coding example.

var puzzlers = [
    function(input) {
     return (input * 3) - 8; 
      //1
  },
    function(input) {
     return (input + 2) * (input + 2) * (input + 2);
      //2
  },
    function(input) {
     return (input * input) - 9;
      //3
  },
    function(input) {
     return input % 4;
      //4
}
];


	//1.11 Choose Their Own Adventure 

//Code Given to Start the challenge
function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  

}

//Solution 
function adventureSelector(userChoice) {
  var index = userChoice - 1;
  var alerts = [
    "You selected the Vines of Doom!",
    "Looks like you want the Lake of Despair!",
    "The Caves of Catastrophe!"
  ];

  var func = function() {alert(alerts[index]);};

  return func;
}


	//1.12 Immediately-Invoked Adventure!

//Code Given to Start the challenge - No Starting Code this challenge  

//Soultion: One line of code was created to call adventureSelector function and passed 3 as an argument ? the last peramiters we left open to immeditly invoke the function.
adventureSelector(3)();




	//1.13 Queue Builder

//Code Given to Start the challenge 
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here 

//Soultion: ?? Found solution in forum.
var puzzlers = [
  function (a) { return 8*a - 10; },
  function (a) { return (a-3) * (a-3) * (a-3); },
  function (a) { return a * a + 4; },
  function (a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function (input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));



	//1.14 Immediately-Invoked Puzzler

//Code Given to Start the challenge
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

//Solution: Alert was created puzzlers array was called then called again to the second item in the array and 3 was added.  Then the 4th function was called and a 9 was added
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));


//End Level

















