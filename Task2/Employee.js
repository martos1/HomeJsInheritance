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
	var payPerHour  = this.getDaySalary() / 8;
	if (this.getAge() < 18){
		return 0;
	}
	
	return payPerHour * hours * 1.5;
}

Employee.prototype.showEmployeeInfo = function() {
	return 'Name ' + this.getName() + ' is ' + this.getAge() +
			' years old ' + this.getIsMale() ? 'man' : 'woman';
}