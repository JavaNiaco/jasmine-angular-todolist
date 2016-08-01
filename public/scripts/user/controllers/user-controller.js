(function() {
	'use strict';

	angular.module('app.user')
		.controller('UserController', UserController)
		.config(function($routeProvider){
			$routeProvider.when('/user', {
				templateUrl: 'views/user/main.html',
				controller: 'UserController',
				controllerAs: 'userVm'
			})			
		})

	function UserController() {


	}

})();