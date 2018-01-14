//CodeSchool.com
//JavaScript  Javascript RoadTrip Part 3
//5. Plains of Prototypes Level 5
//Stephen Hornbeek 2018



	//5.2 Prototypes I

//Code given to start the challenge 
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

//Solution: the function was created inside of the array. var numKind was established to 0 and a for loop was created numkind += 1 finishes the 
//function. The program then returns numKind.
Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind += 1;
    }
  }
  return numKind;
};


	//5.3 Prototypes II

//Code given to start the challenge 
Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};

//Solution: An alert was created that adds the sums of all 3 catagories.
Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};

alert(canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));


	//5.4 Prototypes III

//Code given to start the challenge 
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

//Solution: A prototype function was created for an object and an array. a for loop with the this varable was used for both functions
//the object returns a true or false and the array uses the var numToBreed set to a counter variable and returned at the end of the statment.
Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};


	//5.5 Prototypes IV

//Code given to start the challenge 
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

var badlandsCows = [
  {name: "Voldemort", type: "bull", hadCalf: null},
  {name: "Maleficent", type: "cow", hadCalf: null},
  {name: "Ursula", type: "cow", hadCalf: "Draco"},
  {name: "Draco", type: "calf", hadCalf: null},
  {name: "Joker", type: "bull", hadCalf: null},
  {name: "Chucky", type: "calf", hadCalf: null},
  {name: "Samara", type: "cow", hadCalf: "Chucky"}
];


Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

// set up your numPriorityCows variable


// alert the correct message with the total

//Solution: var numPriorityCows was created and it calls on the count for breading function and each one of the variables.
//an alert was then created that passes in the numPriorityCows variable. 
Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

// set up your numPriorityCows variable
var numPriorityCows = canyonCows.countForBreeding() +
                      valleyCows.countForBreeding() +
                      forestCows.countForBreeding() +
                      badlandsCows.countForBreeding();

// alert the correct message with the total
alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.")



	//5.7 Creation with Prototypes I

//Code given to start the challenge
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post1 and post2


// modify the post properties


// connect the posts together 

//Solution: var post1 and post2 were created both post x/y cordinace were set and the post were given number properties. 
//post1 uses a function sendTheRope to post2 and then vice versa. this makes two ropes on each post.
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post1 and post2
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

// modify the post properties
post1.x = -2;
post1.y = 4;
post1.postNum = 1;
post2.x = 5;
post2.y = 1;
post2.postNum = 2;

// connect the posts together
post1.sendRopeTo(post2);
post2.sendRopeTo(post1);

	//5.8 Creation with Prototypes II

//Code given to start the challenge - x.y cordinace are 3 new post 8,9,10.
x: 0,
y: -3,
postNum: 8,
connectionsTo: 10

x: 6,
y: 8,
postNum: 9,
connectionsTo: 10

x: -2,
y: 3,
postNum: 10,
connectionsTo: 8, 9

var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post8, post9, and post10


// assign property values and make connections

//Solution: var post 8, 9 ,10 are created with the . object properity with generaicPost as a periamiter the properity values of each post 
//were then added into the object. the sendRopeTo function the rope is then passed pack and forth between post. then each post was given
//specific variables that corospond to the challenge request. 
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};


// create post8, post9, and post10
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

// assign property values and make connections
post8.x = 0;
post8.y = -3;
post8.postNum = 8;

post9.x = 6;
post9.y = 8;
post9.postNum = 9;

post10.x = -2;
post10.y = 3;
post10.postNum = 10;

post8.sendRopeTo(post10);
post10.sendRopeTo(post8);
post9.sendRopeTo(post10);
post10.sendRopeTo(post9);

post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;



	//5.9 Constructor I

//Code given to start the challenge
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

//Solution: function fence post was created. the fencepost peramiters were set and the this. function was used to asign the post numbers to 
//themselves. and empty array was built. The function sendRopeTo was passed in and this connectionsTo was pushed to the contectPost var/or function.
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };


  	//5.10 Constructor II

//Code given to start the challenge - Post cordinance 
x: -3,
y: 4,
postNum: 18

x: 5,
y: -1,
postNum: 19

x: -2,
y: 10,
postNum: 20

function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
}

// create post18, post19, and post20


// establish post connections

//Solution: three variables were created with the Fencepost cordinance passed into the post var with its specific peramiters
// the post are then connected with the send rope connection from 20 18 then back and 18 to 19 and back.
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
}

// create post18, post19, and post20
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

// establish post connections
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);



	//5.11 Constructor III

////Code given to start the challenge
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
  this.removeRope = function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  };
  this.movePost = function(x, y) {
    this.x = x;
    this.y = y;
  };
} 

//Solution: remove this from our sendRopeTo, removeRope, and movePost methods
//convert the = assignments to : since these are now properties instead of variables
//change the semicolons to commas

function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  }
};


	//5.12 Overriding Prototypal Methods

	//5.13 Overriding Prototypal Methods I

//Code given to start the challenge - post to ranch dimentions us math.sqrt to solve 
Math.sqrt(49);        // 7
Math.sqrt(45 + 55);   // 10
Math.sqrt(30 / 6);    // 2.23606797749979

//Solution: The goal here was to square rout the distance of the house to a specific fence post. use Math.sqrt to square rout the 
//thisx and this.y varable you need to chane the square rout function to times itself so that javascript can read the formula.
Fencepost.prototype.valueOf = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};


//5.14 Overriding Prototypal Methods II 

//Code given to start the challenge
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

// override the toString method

//Solution: overriding the toString function in the prototype. Create a function(), var that runs through the empty list, a four loup asigned 
//to connectionsTo list anything that is += to index i. and the postNum return the statment string with post number.
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

// override the toString method
Fencepost.prototype.toString = function() {
  var list = "";
  for (var i = 0; i < this.connectionsTo.length; i++) {
    list += this.connectionsTo[i].postNum + "\n";
  }
  return "Fence post #" + this.postNum + ":\n" +
         "Connected to posts:\n" + list +
         "Distance from ranch: " + this.valueOf() + " yards";
};


//End Level





