window.onload = function() {
	console.log('Loaded, yo');	

	gameBoard = document.getElementById('gameBoard');
	guessedDisplay = document.getElementById('guessedDisplay');
	gameStatus = document.getElementById('gameStatus');
	inputInterface = document.getElementById('inputInterface');
	startButton = document.getElementById('start');
	image = document.getElementById('cat');
	
	///////// Start the Game or Reset the Game
	startButton.addEventListener("click", function(){ 
			hangmanGame.start(testWords);
			startButton.innerHTML = "New Game";
			image.setAttribute('src', 'images/hanginthere_'+hangmanGame.guesses+'.jpg');
		}); //use an anon function to control this issues

	///////// Game Play, evertime the user tests a guess, update the game
	//document.getElementById('guess').addEventListener('keyup', gamePlay); //end of the eventlistener for the game play.
	document.addEventListener("keypress", function(char) {
		inputLetter = String.fromCharCode(char.keyCode);
		gamePlay(inputLetter);
	});
}
console.log("main.js working");

var testWords = ["acres", "adult", "advice", "arrangement", "attempt", "August", "autumn", "border", "breeze", "brick", 
			 "calm", "canal", "casey", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", 
			 "damage", "danny", "deeply", "depth", "discussion", "doll", "donkey", 
			 "egypt", "ellen", "essential", "exchange", "exist", "explanation", 
			 "facing", "film", "finest", "fireplace", "floating", "folks", "fort", 
			 "garage", "grabbed", "grandmother", "habit", "happily", "Harry", "heading", "hunter", 
			 "illinois", "image", "independent", "instant", "january", "kids", "label", "lee", "lungs", 
			 "manufacturing", "martin", "mathematics", "melted", "memory", "mill", "mission", "monkey", "mount", "mysterious", 
			 "neighborhood", "norway", "nuts", "occasionally", "official", "ourselves", 
			 "palace", "pennsylvania", "philadelphia", "plates", "poetry", "policeman", "positive", "possibly", "practical", "pride", "promised", 
			 "recall", "relationship", "remarkable", "require", "rhyme", "rocky", "rubbed", "rush", 
			 "sale", "satellites", "satisfied", "scared", "selection", "shake", "shaking", "shallow", "shout", "silly", "simplest", "slight", "slip", "slope", "soap", "solar", "species", "spin", "stiff", "swung", 
			 "tales", "thumb", "tobacco", "toy", "trap", "treated", "tune", 
			 "university", "vapor", "vessels", "wealth", "wolf", "zoo"];


var gamePlay = function(input){
	console.log("guess submitted");
		
		//test the submitted user guess
		if(hangmanGame.guesses > 0 && hangmanGame.isOver() == false){
			hangmanGame.guess(input); 
			hangmanGame.render();
			image.setAttribute('src', 'images/hanginthere_'+hangmanGame.guesses+'.jpg');
		}
		
		
		//see if the game is over
		if(hangmanGame.isOver() == true){
			//when game is over, print the over message
			hangmanGame.overMessage();
		}	
}