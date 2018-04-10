var letter = require('./letter.js');
// Looked up how to change a blank array here and found prototype.. Not sure if using correctly.. 
//An array of new Letter objects representing the letters of the underlying word....I think...?
function Word(gameWord) {
	this.letters = [];
	this.word = gameWord;
	for (var i = 0; i < this.word.length; ++i) {
		this.letters.push(new letter(this.word[i]));
	}
}
//creates the display for our game word
Word.prototype.wordString = function () {
	var playerProg = "";
	for (var i = 0; i < this.letters.length; ++i) {
		playerProg += this.letters[i].toString() + " ";
	}
	console.log(playerProg);
}
// checks letter to see if they have been guessed that applies the correct value
Word.prototype.setBool = function (char) {
	for (var i = 0; i < this.letters.length; ++i) {
		this.letters[i].ifGuessed(char);
	}
}

module.exports = Word;