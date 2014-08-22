$app = angular.module('app', []);

$app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		controller: listController,
		templateUrl: 'list.html'
	}).
	when('/edit/:name', {
		controller: editController,
		templateUrl: 'form.html'
	}).
	when('/new', {
		controller: newController,
		templateUrl: 'form.html'
	}).
	otherwise({
		redirectTo: '/'
	});
});

$app.run(function($rootScope) {
	$rootScope.fruits = ["banana", "apple", "orange"];
});