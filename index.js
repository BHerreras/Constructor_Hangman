var Word = require('./word.js');
var inquirer = require('inquirer');

var playWords = [];

var guessCount = 10;
var gameWord = new Word(playWords[Math.floor(Math.random() * playWords.length)]);

function roundNumber(guessCount, gameWord) {
	inquirer.prompt([
		{
			type: "input",
			name: "guess",
			message: "Guess a letter!"
		}

//]).then(function (results) 
// Not really sure where to go from here...... definately need some more time!