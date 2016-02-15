/**
 * 
 */

function Employee(name, age, isMale, daySalary) {
	Person.call(this, name, age, isMale)
	var _daySalary = daySalary;
	
	this.getDaySalary = function() {
		return _daySalary;
	}
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateOvertime = function(hours) {
	
}