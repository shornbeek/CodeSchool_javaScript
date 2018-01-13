//CodeSchool.com
//JavaScript  Javascript RoadTrip Part 3
//4. Oceans of Objects Level 4
//Stephen Hornbeek 2018



	//4.2 Building Objects I

//Code given to start the challenge - No Code

//Solution: var is needed to define each vechical 1,2,3. Three properties were created some as strings some numbers seporated with ,  {"",3,""};
var vehicle1 = {type:"Motorboat", capacity:6, storedAt:"Ammunition Depot"};

var vehicle2 = {type:"jet ski", capacity:1, storedAt:"Reef Dock"};

var vehicle3 = {type:"Submarine", capacity:8, storedAt:"Underwater Outpost"};


	//4.3 Accessing Objects I

//Code given to start the challenge
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// log the property value to the console


//Solution: console .log was used. the motorboat = vechical1 varable and the capacity of that vechical was 6. vechical then tag
console.log(vehicle1.capacity);



	//4.4 Accessing Objects II

//Code given to start the challenge
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array


// build findVehicle function expression


// call findVehicle


//Solution: First an array was created.then the findVehicle function was created with the peramiters name and list. A for loop was created
//and the index returns the type of vehicle type. 
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array
var vehicles = [vehicle1, vehicle2, vehicle3];

// build findVehicle function expression
var findVehicle = function(name, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].type == name) {
      return list[i].storedAt;
    }
  }
};
// call findVehicle

findVehicle("Submarine", vehicles);


	//4.5 Building Objects II

//Code given to start the challenge
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here


//Solution: the dot notation was used to add weapons to the vehicles. Different properties were added to each specific vechicle. 
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here
vehicle1.capacity += 4;  // or = 10;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;


	//4.6 Moar Power!! Fight Pirates!!

//Code given to start the challenge
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// add properties and assign values

//Solution:  Bracket notations were used to add a properity "# of weapons" to each one of the vehicle objects 
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// add properties and assign values
vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;


	//4.7 Blinders On!

//Code given to start the challenge
var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock


// add weaponBulbs property to lighthouseRock


// log the correct weaponBulbs array value to the console

//Solution: We removed added and logged three differnt properties to the object. Bracket notation was used.
var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock
delete lighthouseRock["bulbs"];

// add weaponBulbs property to lighthouseRock
lighthouseRock["weaponBulbs"] = superBlinders;


// log the correct weaponBulbs array value to the console
console.log(lighthouseRock.weaponBulbs[2][0]);


	//4.8 To the Lighthouse, Quick!

//Code given to start the challenge
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  
  // add the ranger<number> property and assign a ranger object
  

}

// call addRanger three times to add the new rangers

//Solution:
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  location.numRangers++;
    // add the ranger<number> property and assign a ranger object
  location["ranger" + location.numRangers] = {
    name: name,
    skillz: skillz,
    station: station
  };
}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);



	//4.9 Man your Bulb Stations!

//Code given to start the challenge
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  

  alert(list);
}

dontPanic(lighthouseRock);

//Solution:
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list

  for (var i = 1; i <= location.numRangers; i++) {
    var ranger = location["ranger"+i];
    var name = ranger.name;
    var superblinder = location.weaponBulbs[ranger.station-1][0];
    list += name + ", man the " + superblinder + "!\n";
  }

  alert(list);
}

dontPanic(lighthouseRock);


	//4.11 Functions as Properties I

//Code given to start the challenge
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  

};


//Solution: location is now inside the function so we can call it this. The function addRanger was updated and the function was placed inside 
//the : addRanger is now an internal function.
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};




	//4.12 Calling Function Properties I

//Code given to start the challenge
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

//Solution added addRanger function to lighthouseRock with the specific person and varables added

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// call the addRanger method on lighthouseRock
lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);



	//4.13 Functions as Properties II

//Code given to start the challenge
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// create addBulb function property here

//Solution lighthouseRock was called and addBuld = function / method was declared with the preamiters name, wattage. this was used because 
//were inside the lighthouseRock var / local scope. push was used to add name and wattage to the main array superBlinders
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// create addBulb function property here
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
  
};


	//4.14 Calling Function Properties II

//Code given to start the challenge
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

// call addBulb and pass in the correct arguments

//Solution: lighthouseRock was called and add Bulb verable is used to push the name and wattage information onto the main array
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

// call addBulb and pass in the correct arguments
lighthouseRock.addBulb("Blasterbright",5000);
lighthouseRock.addBulb("Sight Slayer",1800);
lighthouseRock.addBulb("Burner of Souls",7500);



  //4.17 Enumeration I

  //Code given to start the challenge
  var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns


// call listGuns and pass in rockSpearguns

  //Solution:
  var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns
var listGuns = function(guns) {
  for (var speargun in guns) {
    console.log(speargun);
  }
};

// call listGuns and pass in rockSpearguns
listGuns(rockSpearguns);

//4.18 Enumeration II

  //Code given to start the challenge
  var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  for (var speargun in guns) {
    // modify the log message here
    console.log(speargun);
  }
}

listGuns(rockSpearguns);

//Solution:
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  for (var speargun in guns) {
    // modify the log message here
    console.log("Behold! " + speargun + ", with " +
                guns[speargun]["heft"] + " heft!");
  }
}

listGuns(rockSpearguns);



	//4.19 Enumeration III

//Code given to start the challenge
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// convert listGuns function
function listGuns(guns) {
  for (var speargun in guns) {
    console.log("Behold! " + speargun + ", with " +
                guns[speargun]["heft"] + " heft!");
  }
}

// call listGuns using bracket notation on rockSpearguns
listGuns(rockSpearguns);

//Solution:
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

rockSpearguns["listGuns"] = function() {
  for (var property in this) {
    if (this[property]["heft"] != undefined) {
      console.log("Behold! " + property + ", with " +
                  this[property]["heft"] + " heft!");
    }
  }
};

rockSpearguns["listGuns"]();




//End Level



















