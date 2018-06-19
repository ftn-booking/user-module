'use strict';

angular.module('core.type')
	.service('TypeService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.getLodgingTypes = () => {
			return $http.get(`${prefix}/api/types/lodging`);
		};
		this.getFoodTypes = () => {
			return $http.get(`${prefix}/api/types/food`);
		};
		this.getFeatureTypes = () => {
			return $http.get(`${prefix}/api/types/feature`);
		};
	});
