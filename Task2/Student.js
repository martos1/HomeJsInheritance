/**
 * 
 */

function Student(name, age, isMale, score) {
	Person.call(this, name, age, isMale)
	var _score = score;
	
	this.getScore = function() {
		return _score;
	}
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showStudetInfo = function() {
	
}