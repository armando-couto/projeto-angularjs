function listController($scope) {

}

function editController($scope, $location, $routeParams) {
	$scope.title = "Edit fruit";
	$scope.fruit = $routeParams.name;

	$scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);

	$scope.save = function() {
		$scope.fruits[$scope.fruitIndex] = $scope.fruit;
		$location.path('/');
	}
}

function newController($scope, $location) {
	$scope.title = "New fruit";
	$scope.fruit = "";
	$scope.save = function() {
		$scope.fruits.push($scope.fruit);
		$location.path('/');
	}
}