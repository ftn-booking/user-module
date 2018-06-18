'use strict';

angular.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'home',
				redirectTo: 'home.lodgings',
				url: '/',
				component: 'myHome'
			})
			.state({
				name: 'home.lodgings',
				url: '^/lodgings',
				component: 'myLodgingList'
			})
			.state({
				name: 'home.lodging',
				url: '^/lodging/{id:\\d+}/from/{fromDate:\\d+}/to/{toDate:\\d+}',
				component: 'myLodgingDetail'
			})
			.state({
				name: 'home.reservations',
				url: '^/reservations',
				template: '<h1>Reservations</h1>'
			})
			.state({
				name: 'profile',
				url: '/profile',
				component: 'myProfile'
			})
			.state({
				name: 'authentication',
				url: '/authentication',
				component: 'myAuthentication'
			})
			.state({
				name: 'error',
				url: '/error',
				template: '<h1>Error 404</h1>'
			});

		$urlRouterProvider
			.when('', '/')
			.otherwise('/error');
	})
	.run(function($rootScope, $http) {
		const email = localStorage.getItem('email');
		const token = localStorage.getItem('token');
		if(email) {
			$rootScope.user = {};
			$rootScope.user.email = email;
			$http.defaults.headers.common.Authorization = 'Bearer ' + token;
		}
	});
