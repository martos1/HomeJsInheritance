/**
 * 
 */

function Task(name, hours){
	var _name = name;
	var _workingHours = hours;
	
	function getName() {
		return _name;
	}
	
	function getWorkingHours() {
		return _workingHours;
	}
	
	function setWorkingHours(hours) {
		_workingHours = hours;
	}
}