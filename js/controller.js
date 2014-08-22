function simpleController($scope) {
	$scope.user = {
		name: "Armando Couto"
	}
}

function countController($scope) {
	$scope.counter = 0;

	$scope.addOne = function() {
		$scope.counter++;
	}
}

function loopController ($scope) {
	$scope.fruits = ['limao', 'banana', 'laranja'];
}