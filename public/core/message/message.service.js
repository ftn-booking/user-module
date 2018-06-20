'use strict';

angular.module('core.message')
	.service('MessageService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.getAll = () => {
			return $http.get(`${prefix}/api/messages`);
		};
		this.add = (data) => {
			return $http.post(`${prefix}/api/messages`, data);
		};
	});
