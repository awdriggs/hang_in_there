console.log("letter.js is working");

///////////////////////////////////////////////////////////
// Letter Object Constructor
///////////////////////////////////////////////////////////

// Takes a single letter, initially the letter is hidden.
function Letter(value) {
	this.value =  value;
	this.hidden = true;
}

// change hiden to true
Letter.prototype.hide = function() {
	this.hidden = true;
};

// change hidden to false
Letter.prototype.show = function() {
	this.hidden = false;
};

// Render Method
// Returns the letter or a _ if hidden
Letter.prototype.render = function() {
	if(this.hidden == true){
		return "_";
	} else return this.value;
};

// Testing the letter constructor
//var testLetter = new Letter("W");
// console.log("initial value " + testLetter.hidden);


