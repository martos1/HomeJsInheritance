/**
 * 
 */

function Student(name, age, isMale, score) {
	Person.call(this, name, age, isMale)
	var _score = score;
	
	this.getScore = function() {
		return _score;
	}
	this.setScore = function(score) {
		_score = score;
	}
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showStudetInfo = function() {
	return 'Name ' + this.getName() + ' is ' + this.getAge() +
			' years old ' + this.getIsMale() ? 'man' : 'woman' + ' with ' + this.getScore() + ' score.';
}