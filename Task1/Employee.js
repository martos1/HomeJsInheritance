function Employee(name) {
	var _name = name;
	var _currentTask;
	var _hoursLeft = 8;
	var _allWork = new AllWork();

	this.getName = function() {
		return _name;
	}

	this.getCurrentTask = function() {
		return _currentTask;
	}

	this.getHoursLeft = function() {
		return _hoursLeft;
	}

	this.getAllWork = function() {
		return _allWork;
	}

	this.setCurrentTask = function(task) {
		_currentTask = task;
	}

	this.setHoursLeft = function(hours) {
		_hoursLeft = hours;
	}

}


Employee.prototype.startWorkingDay = function () {
	return AllWork.getNextTask();
}

Employee.prototype.getNextTask = function () {
	
}



