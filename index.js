<<<<<<< HEAD
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
=======
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
>>>>>>> ba5a83b7a192159f057949704c4c3764f0a4d79a
// Not really sure where to go from here...... definately need some more time!