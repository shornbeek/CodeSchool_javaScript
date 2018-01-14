//CodeSchool.com
//JavaScript  Javascript Best Practices
//1 The Sword of Syntax Level 1
//Stephen Hornbeek 2018


	//1.1 Ternary Conditionals - Video

	//1.2 All Packed

//Code given to start the challenge 
var allPacked = false;
var adventureTime;

adventureTime = allPacked ? 'yes' : 'no';

//Solution: allPacked is set to fales so the program would return a "no".
'no'

	//1.3 Adventure Time

//Code given to start the challenge 
var allPacked = true;
var swordPolished = true;
var adventureTime;

adventureTime = allPacked && swordPolished ? 'yes' : 'no';

//Solution both allPacked and swordPolished are set to true so the program would retuen 'yes'
'yes'





	//1.4 Ready to Go

//Code given to start the challenge 
var allPacked = true;
var readyToGo = true;
var adventureTime;

adventureTime = allPacked && readyToGo ?

  function() {
    return 'Adventure time is now!';
  }()
  :
  function() {
    return 'Adventuring has been postponed!';
  }();

//Solution - the solution is multipule choice but the correc t answer is the yes string. 
'Adventure time is now!'



	//1.5 Enter Pesky Gnat

//Code given to start the challenge 
var isHero = true;
var character;

if (isHero) {
  character = 'Dhuun';
} else {
  character = 'Pesky Gnat';
}

//Solution 
character = isHero ? 'Dhuun' : 'Pesky Gnat';


	
	//1.6 Ternary Returns

//Code given to start the challenge
var isHero = true;
var character = isHero ? 'Dhuun' : 'Pesky Gnat'; 

//Solution left side of the ternary equasion = true right side = false. : is the operator and ? is the Ternary ? : 
'Dhuun'


	//1.7 Logical Assignment I - Video

	//1.8 Lost In The Brush

//Code given to start the challenge 
var lost;
lost = 4 || undefined;

//Solution for is a hard value and equates to truthy because it is reconized. falsy is undefined and never triggred.
4 


	//1.9 Look No Further

//Code given to start the challenge
var lost;
lost = 4 || undefined;

//Solution the undefined will never be run and this issue / bug is called short-circuit
short-circuit 



	//1.10 Still Lost 

//Code given to start the challenge 
var lost;
var darkness = true;

lost = undefined || darkness;

//Solution the val darkness is undefined and will return its own value of true
true


	//1.11 Contents In Your Pocket 

//Code given to start the challenge 
var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var pocketContents = pocketStuff ? pocketStuff : [];

//Solution you dont need both pocketStuff or the ? : operator so you can delete one pocketStuff and replace the ? : with an or operator ||
var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var pocketContents =  pocketStuff || [];


	//1.12 The One Who Learns

//Code given to start the challenge 
var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var cluesToThePast = pocketStuff || [];
getMyIdentity(cluesToThePast);

function getMyIdentity(memories) {
  var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
  return 'unknown' || identity;
}

//Solution idenity was switched from falsy to truthy by switching its loction to the left sid eof the or operation. 
var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var cluesToThePast = pocketStuff || [];
getMyIdentity(cluesToThePast);

function getMyIdentity(memories) {
  var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
  return identity || 'unknown';
}


	//1.13 Logical Assignment II


//1.10 Still Lost 

//Code given to start the challenge 

//Solution 


//1.10 Still Lost 

//Code given to start the challenge 

//Solution 


//1.10 Still Lost 

//Code given to start the challenge 

//Solution 


//1.10 Still Lost 

//Code given to start the challenge 

//Solution 


