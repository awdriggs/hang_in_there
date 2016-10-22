 console.log("word.js is working");


///////////////////////////////////////////////////////////
// Word Object Constructor
///////////////////////////////////////////////////////////

//accepts an array of letters objects
function Word() {
	this.letters = [];
}

// Get Letters Method
// accepts a string as argument, will put all letters of input argument into `letters`
Word.prototype.getLetters = function(newWord) {
	var newArray = [];

	for(var i = 0; i < newWord.length; i++){
		newArray.push(new Letter(newWord[i]));  
	}

	this.letters = newArray;
};

// is found Letters Method
// returns true if no letters are still hidden
// returns false if at least one letter is hidden

//test this when you get home!
Word.prototype.isFound = function() {
	//if the loop makes it through without finding any hidden letters, it will return true for found.
	//if there are any letters hidden, it will return false.
	for(var i = 0; i < this.letters.length; i++){
		//debugger;
		if(this.letters[i].hidden == true)
			return false;
	}
	return true;

};

// Try Method
// accepts an input argument, a string goes through and reveal the ones whos values matches
// the input argument letter
// returns a boolean if the letter was found
Word.prototype.try = function(letter) {
	var found = false; //this is needed to catch repeated letters

	for(var i = 0; i < this.letters.length; i++){
		if(this.letters[i].value == letter) {
			found = true;
			//if the letters was try and was in the list, change it to visible
			this.letters[i].show();	
		} 
	}
	return found;
};

// Render Method
// calls the render method for each letter object in the letters array
Word.prototype.render = function() {
	var renderString = "";
	for(var i = 0; i < this.letters.length; i++){
		renderString = renderString + this.letters[i].render();
	}
	return renderString;
};

// Show All
// sets all letters in the word to visible, mostly for testing
Word.prototype.showAll = function() {
	for(var i = 0; i < this.letters.length; i++){
			this.letters[i].show();	
		} 
};

// Hide All
// sets all letters in the word to hidden, used mostly for testing
Word.prototype.hideAll = function() {
	for(var i = 0; i < this.letters.length; i++){
			this.letters[i].hide();	
		} 
};

// Testing the word constructor
// var testWord = new Word();

// // string to test
// testWord.getLetters("big");
// console.log(testWord.letters);
// //console.log(testWord.isFound());
// // testWord.letters[0].hidden = false;
// // testWord.letters[1].hidden = false;
// // testWord.letters[2].hidden = false;
// // console.log(testWord.letters);
// // console.log(testWord.isFound());
// // console.log("test c " + testWord.try("c"));
// // console.log("test b " + testWord.try("b"));
// console.log(testWord.render());

