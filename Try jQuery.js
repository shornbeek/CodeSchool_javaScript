//CodeSchool.com
//Try jQuery 
// Introduction to jQuery Level 1
//Stephen Hornbeek 2018

	//1.3 

//Code given to start the challenge - HTML 
<div class="homepage-wrapper">
  <h2>Welcome to jQuery Travels - Traversing the DOM since 2006</h2>
  <p>Fly to New York today for as little as <span>$299.99</span></p>
</div>


//Solution console log the h2 tag
$("h2")


	//1.4 Element Selector II

//Code given to start the challenge - HTML 
div class="homepage-wrapper">
  <h2>Welcome to jQuery Travels - Traversing the DOM since 2006</h2>
  <p>Fly to New York today for as little as <span>$299.99</span></p>
</div>

//Solution: Select the span element net step will be to change the price
$("span")


	//1.5 The text() Method

//Code given to start the challenge - HTML 
<div class="homepage-wrapper">
  <h2>Welcome to jQuery Travels - Traversing the DOM since 2006</h2>
  <p>Fly to New York today for as little as <correct><span>$299.99</span></correct></p>
</div>

//Solution: Span was called with jQuery then the .text was used with () to access the text inside. my guess is that we will probibly fill the text next lesson
$("span").text()


	//1.6 Changing Text

//Code given to start the challenge - HTML
<div class="homepage-wrapper">
  <h2>Welcome to jQuery Travels - Traversing the DOM since 2006</h2>
  <p>Fly to New York today for as little as <span>$299.99</span></p>
</div>


//Solution: span access the html text calls the text and a string of "$100" was added from jQuery into the html
$("span").text("$100")



	//1.7 DOM Ready 

//Code given to start the challenge - JS
$("span").text("$100");


//Solution readdies the dom so that the dom fires after all the html is loaded
$(document).ready();
$("span").text("$100");


