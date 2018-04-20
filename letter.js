function Letter(char) {
	this.char = char;
	this.guessed = false;
}

Letter.prototype.toString = function () {
	if (this.guessed) {
		return this.char;
	} else {
		return "_";
	}
}

Letter.prototype.ifGuessed = function (char) {
	if (char.toLowerCase() === this.char.toLowerCase()) {
		this.guessed = true;
		return true;
	}
	return false;
}

module.exports = Letter;