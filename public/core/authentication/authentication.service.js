'use strict';

angular.module('core.authentication')
	.service('AuthenticationService', function($http) {
		this.register = (data) => {
			return $http.post('/api/authentication/', data);
		};
		this.logIn = (data) => {
			return $http.put('/api/authentication/', data);
		};
		this.logOut = () => {
			return $http.delete('/api/authentication/');
		};
		this.getCurrentUser = () => {
			return $http.get('/api/authentication/');
		};
	});
