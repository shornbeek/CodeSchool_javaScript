//CodeSchool.com
//JavaScript  Javascript RoadTrip Part 3
//2. Cold Closure Cove Level 2
//Stephen Hornbeek 2018


	//2.2 Tracing a Closure I

//Code given to start the challenge
function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);

//Solution: use one line to alert 54 in the console/terminal.
alert (54);



	//2.3 Tracing a Closure II

//Code given to start the challenge
function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);

//Solution: secret = 5 mystery = 4, secret was passed into mystery2 and/or multiplier? to return 5 * 4 = 20. then it was looking at var result = hidden * 2 = 40 ? 
alert(40);



	//2.4 Tracing a Closure III

//Code given to start the challenge
function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

//Solution:
alert (122);



	//2.5 Building a Closure I

//Code given to start the challenge
function warningMaker(obstacle) {
  
}

//Solution: I returned an anonymous function () that alerted the beware string with first closure being the obstacle. 
function warningMaker(obstacle) {
  return function() {
  alert ("Beware! There have been " + obstacle + " sightings in the Cove today!");
 };
}


	//2.6 Using a Closure I

//Code given to start the challenge
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

// build your warning message here

//Solution: Closure was created with the var icebergAlert including the function warning maker with the perimeter of obsticle . iceberg will fill the obstacle perimeter
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");
icebergAlert();


	//2.7 Building a Closure II

//Code given to start the challenge
function warningMaker(obstacle) {
  return function() { // set parameters
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          // finish the warning message here

    );
  };
}

//Solution: number and location peramiters were added into the return function then alerted with the peramiters listed in a string
function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
      " sightings in the Cove today!\n" +
      number + " have been spotted at the " + location + "!"
    );
  };
}


	//2.8 Using a Closure II

//Code given to start the challenge
function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here

//Solution: KillerPenguinAlert and snowYetiAlert are examples of aditional varables that are using the warningMaker function to alert the number and location of the warning!!/alert!!
function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here

killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");




	//2.10 Changing a Bound Value I

//Code given to start the challenge
function warningMaker(obstacle) {
  // create a count
  return function(number, location) {
    // keep track of warnings
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          // finish the warning message here
          
    );
  };
}

//Solution var count was set at 0 to start. count++ incriment the counter by 1 rest of the alert message was added to the alert
function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count + " today for " +
          obstacle + " danger.");
  };
}



	//2.11 Highway to the Danger Zones

//Code given to start the challenge
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // add each location to the zones array
    
    // add each zone to the list string
    
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          
    );
  };
}

//Solution: zone was created and push was used to add the zone to the list string. Map function z need clarity on...??  The warning message was completed.
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";

    // add each location to the zones array
	zones.push(location);

    // add each zone to the list string
    zones.map(function(z){list += z + "\n";});

    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          "Current danger zones are:\n" + list
    );
  };
}


	//2.12 Just Keep Track of It All!

//Code given to start the challenge
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push(/*//array//*/);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list += /*//location//*/ + " (" + /*//number//*/ + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

//Solution  The correct variables were added in.
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

	//2.14 Final Closed Values I

//Code given to start the challenge
function assignLaser(shark, sharkList) {
  var stationAssignment;
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      stationAssignment = function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
  return stationAssignment;
}


//Solution Return function was moved up above the alert function and the stationAssignment was remved becasue the function is local? 
function assignLaser(shark, sharkList) {
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
}


	//2.15 Final Closed Values II

//Code given to start the challenge
function makeTargetAssigner(sharks, targets) {
  // insert your code here
  
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");


//Solution return function is added with a for loop going through the index. If the index is == shark alert the string with the following message
function makeTargetAssigner(sharks, targets) {
 return function(shark) {
    for (var i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
        alert("Hey, " + shark + "!\n" +
              "There've been " + targets[i] +
              " sightings in our area!\n" +
              "Time to take care of business!");
      }
    }
  };
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");


//End Level







