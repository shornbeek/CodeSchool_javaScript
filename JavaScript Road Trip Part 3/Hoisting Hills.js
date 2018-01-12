//CodeSchool.com
//JavaScript  Javascript RoadTrip Part 3
//3.0 Hoisting Hills Level 3
//Stephen Hornbeek 2018 


//End Level



	//3.2 Analyzing Load Order I

//Code given to start the challenge
function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
}

//Solution: The function runs through the exicution context. You have to move down the result = secret under the last function to return the unused2 varable
console.log("unused2");



	//3.3 Analyzing Load Order II

//Code given to start the challenge
function theBridgeOfHoistingDoom() {
  function balrog() {
    return "fire";
  }
  var ring;
  function elf() {
    return "pointy ears";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  var power = ring();
  return elf();
  function elf() {
    return "immortal";
  }
}


//Solution: First the varables were pulled out and to the top then the functions weere placed under the var. The function would not return the same function 
//twice so the duplicated elf and balrog functions could be deleted. The loaded functions are refuring to the function declorations. The variables are initialized at the very top.
//and all of the functions are declaried together.the fuction reaches the return starment (return wizzards) and stops the next function and return can be deleated.
function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;

  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  function elf() {
    return "immortal";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
}

	//3.4 Analyzing Load Order III

//Code given to start the challenge
function theBridgeOfHoistingDoom() {
  function fellowship() {
    return "friends";
  }
  var sword = "sting";
  var dwarf = function() {
    return "axe";
  };
  var fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;
  fellowship = function() {
    return "mines"
  };
  sword = function() {
    return "glamdring";
  };
  var ring = function() {
    return "precious";
  };
}


//Solution: Please see internal notes!
function theBridgeOfHoistingDoom( ){
  // step 1
  // move declarations to the top
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  // step 2, comment out fellowship
  // assuming "loaded function" means
  // function declarations (aka. declared
  // functions ... in this case, only
  // fellowship
  /*
  function fellowship(){
    return "friends";
  }
  */
  // step 3 ... not applicable, nothing to do
  
  // step 4 ... below remove var from sword,
  // dwarf, fall and ring
  sword = "sting";
  dwarf = function(){ 
    return "axe";
  };
  fall = "Fly you fools!";
  fellowship = function(){
    return "broken";
  };
  ring();
  // step 5 ... nothing to do
  return sword;
  
  // step 6 ... comment out all of following
  /*
  fellowship = function(){
    return "mines"
  };
  sword = function(){
    return "glamdring";
  };
  ring = function(){
      return "precious";
  };
  */
}



	//3.5 Analyzing Load Order IV

//Code given to start the challenge
function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  }
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  }
  ring();
  return sword;
}

//Solution: The first return friends is not defined and has no supporting command / asignment. because of this an error was returned. 
console.log("ERROR");

//End Level










