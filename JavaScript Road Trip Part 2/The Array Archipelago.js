//CodeSchool.com
//JavaScript  The Array Archipelago Level 5
//Stephen Hornbeek


//Adjusting Array Contents I
list [3] = 4;


//Array Functions I
 list.push (10);


 //Building Arrays
 var values = ["hi", 3 , true];


//Array Functions II
 var bool = values.pop();


 //2D Arrays I
 var infant = eightiesMovies[1][4];


 //2D Arrays II
 alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1]);


 //Searching Arrays Iteration over Array Contents
 function numStrings(list) {
  var stringCount = 0;
  for (var i = 0; i < list.length; i++) {
    if (typeof(list[i]) == "string") {
      stringCount++;
    }
  }
  return stringCount;
}



//End Level