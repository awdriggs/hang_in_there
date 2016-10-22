console.log("game.js is working");

function Game() {
	this.guesses = 0;
	this.guessedLetters = ""; //will be a string later
	this.currentWord; //will be a new word later, is it better to initialize here?
	this.answer = "";
}

//startgame method
// accepts an argument, an array of strings
// sets `guesses` to ten
// sets `currentWord` to an instance of `word`
// resets the `guessedLetters` array
// gets a random word from the wordsArray list passed to the function, creates
Game.prototype.startGame = function(wordsArray) {
	this.guesses = 10;
	this.guessedLetter = "";
	this.currentWord = new Word();
	this.guessedLetters = "";
	
	// gets a word form the list passed in as wordsArray, 
	// calls the getLetter method of the Words object.
	var randomIndex = Math.floor(Math.random()*wordsArray.length);
	this.answer = wordsArray[randomIndex]
	this.currentWord.getLetters(this.answer);

	// return the index of the random letter so it can be removed from the array
	// that way there is no repeated words when playing multiple games.
	return randomIndex;
};

//should all the edits for guess go in here?
Game.prototype.guess = function(letter) {
	var alreadyGuessed = false;
	 // check the list of guessed letters to see if the letter has already been guessed,
	 // no penatly for duplicate guesses!
	for(var i = 0; i < this.guessedLetters.length; i++){
		if(letter == this.guessedLetters[i]){
			alreadyGuessed = true;
			break;
		}
	}

	// if the letter has not already been guessed, try it, subtract a guess, and add the letter to guessed letters
	if(alreadyGuessed == false){
		if(this.currentWord.try(letter) == false){
			this.guesses--;
		}
		this.guessedLetters += letter;	
	}	
};

Game.prototype.isOver = function() {
	if(this.currentWord.isFound() == true || this.guesses == 0){
		return true;
	} else return false;
};

Game.prototype.overMessage = function() {
	if(this.isOver() == true && this.currentWord.isFound() == true){
		console.log("You Win! " + this.answer + " was found with " + this.guesses + " guesses remaining");
	} else if(this.isOver() == true && this.guesses == 0){
		//this.currentWord.showAll();
		console.log("You Lose! " + this.answer + " was never found!");
	} else console.log("");
}

// Calls render for the currentWord
// prints number of guesses left
// prints the list of guessed letters
Game.prototype.render = function() {
	console.log(this.currentWord.render() 
				+ "\n Letters Guessed: " + this.guessedLetters 
				+ "\n Guesses Left: " + this.guesses);
};

