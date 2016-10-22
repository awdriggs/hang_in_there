console.log("hangman is working!");

var hangmanGame = {
	//attributes
	guesses : 0,
	guessedLetters : "",
	currentWord : "", //will be a new word later, initialized in start
	answer : "",
	currentGuess : "", //replaces guessedLetter in previous version, is this even needed or used?
	
	//behaviors

	start : function(wordsArray) {
		console.log("starting game");
		this.guesses = 10;
		this.guessedLetters = "";
		this.currentWord = new Word();
		
		// gets a word form the list passed in as wordsArray, 
		// calls the getLetter method of the Words object.
		var randomIndex = Math.floor(Math.random()*wordsArray.length);
		this.answer = wordsArray[randomIndex]
		this.currentWord.getLetters(this.answer);

		//update the game board
		this.render();

		//ADD THIS, unhide the inputInterface, ie. remove the hidden class
		// return the index of the random letter so it can be removed from the array
		// that way there is no repeated words when playing multiple games.
		return randomIndex;
	},

	//updates the gameBoard and the guessed letters list
	render : function() {
		gameBoard.innerHTML = this.currentWord.render();
		guessedDisplay.innerHTML = "Letters Guessed: " + this.guessedLetters;
		gameStatus.innerHTML = "Guesses Left: " + this.guesses;
	},

	guess : function(letter) {
		console.log("trying "+ letter);
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
				this.guessedLetters += letter;	
			}
			
		}	
	},

	isOver : function() {
		if(this.currentWord.isFound() == true || this.guesses == 0){
			return true;
		} else return false;
	},

	overMessage : function() {
		if(this.isOver() == true && this.currentWord.isFound() == true){
			gameStatus.innerHTML = "You Win! " + this.answer + " was found with " + this.guesses + " guesses remaining";
		} else if(this.isOver() == true && this.guesses == 0){
			gameStatus.innerHTML = "You Lose! " + this.answer + " was never found!";
		} else console.log("");
	}
} 
