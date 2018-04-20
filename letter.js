<<<<<<< HEAD
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

=======
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

>>>>>>> ba5a83b7a192159f057949704c4c3764f0a4d79a
module.exports = Letter;