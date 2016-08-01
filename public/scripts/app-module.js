'use strict';
angular.module('app', [
		'ngRoute', 
		'app.todo',
		'app.user'
	])
	.value('version', 'v1.0.1');