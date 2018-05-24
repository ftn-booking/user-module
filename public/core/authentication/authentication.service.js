'use strict';

angular.module('core.authentication')
	.service('AuthenticationService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.register = (data) => {
			return $http.post(`${prefix}/api/authentication`, data);
		};
		this.logIn = (data) => {
			return $http.post(`${prefix}/login`, data).then(
				(response) => {
					localStorage.setItem('email', data.email);
					localStorage.setItem('token', response.data);
					$http.defaults.headers.common.Authorization = 'Bearer ' + response.data;
				});
		};
		this.logOut = () => {
			localStorage.removeItem('email');
			localStorage.removeItem('token');
			delete $http.defaults.headers.common.Authorization;
		};
	});
