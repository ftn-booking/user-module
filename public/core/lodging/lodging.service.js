'use strict';

angular.module('core.lodging')
	.service('LodgingService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.getAll = () => {
			return $http.get(`${prefix}/api/lodgings/`);
		};
		this.getOne = (id) => {
			return $http.get(`${prefix}/api/lodgings/${id}`);
		};
		this.getAvailable = (fromDate, toDate) => {
			return $http.get(`${prefix}/api/lodgings/from/${fromDate}/to/${toDate}`);
		};
	});
