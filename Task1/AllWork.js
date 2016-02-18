/**
 * 
 */

function AllWork(){
	var _tasks = [];
	var _freePlacesForTasks = 10;
	var _currentUnassignedTask;
	
	this.getTasks = function() {
		return _tasks;
	}

	this.getFreePlaces = function() {
		return _freePlacesForTasks;
	}
	
	this.getCurrentUnassignedTask = function() {
		return _currentUnassignedTask;
	}

	this.setCurrentUnassignedTask = function(curentUnassignedTask) {
		_currentUnassignedTask = curentUnassignedTask;
	}

	this.setTask = function(task){
		_tasks.push(task);
	}

	this.getNextTask = function(){

	}
}

AllWork.prototype.addTask = function(task) {
	this.setTask(task);
}

AllWork.prototype.getNextTask = function(){
	return getTasks[getCurrentUnassignedTask()];
}

AllWork.prototype.isAllWorkDone = function () {
	if(this.getTasks().length > 0){
		return false;
	}
	
	return true;
}




