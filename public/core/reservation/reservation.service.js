'use strict';

angular.module('core.reservation')
	.service('ReservationService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.getAll = () => {
			return $http.get(`${prefix}/api/reservations/me/`);
		};
		this.reserve = (data) => {
			return $http.post(`${prefix}/api/reservations/`, data);
		};
		this.rate = (id, rating) => {
			return $http.put(`${prefix}/api/reservations/${id}/rate/${rating}`);
		};
		this.cancel = (id) => {
			return $http.delete(`${prefix}/api/reservations/${id}`);
		};
	});
