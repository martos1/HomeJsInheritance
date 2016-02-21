/**
 * 
 */

function Person(name, age, isMale){
	var _name = name;
	var _age = age;
	var _isMale = isMale;
	
	this.getName = function() {
		return _name;
	}
	
	this.getAge = function() {
		return _age;
	}
	
	this.getIsMale = function() {
		return _isMale;
	}
	
	this.setAge = function(age) {
		_age = age;
	}
	
	this.setIsMale = function(isMale) {
		_isMale = isMale;
	}
	
}

Person.prototype.showPersonInfo = function() {
	return 'Name ' + this.getName() + ' is ' + this.getAge() + ' years old ' + this.getIsMale() ? 'man' : 'woman';
}