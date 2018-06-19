'use strict';

angular.module('core.price')
	.service('PriceService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.getAll = (id) => {
			return $http.get(`${prefix}/api/prices/${id}`);
		};
		this.getActive = (id, fromDate) => {
			return $http.get(`${prefix}/api/prices/${id}/from/${fromDate}`);
		};
	});
