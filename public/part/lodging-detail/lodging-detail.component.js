'use strict';

angular.module('lodgingDetail')
	.component('myLodgingDetail', {
		templateUrl: '/part/lodging-detail/lodging-detail.template.html',
		controller: function($stateParams, LodgingService, ReservationService) {
			this.lodgingId = $stateParams.id;
			this.fromDate = new Date(parseInt($stateParams.fromDate));
			this.toDate = new Date(parseInt($stateParams.toDate));

			LodgingService.getOne(this.lodgingId)
				.then((response) => {
					this.lodging = response.data;
				}, () => {
					this.lodging = null;
				});

			this.reserve = () => {
				let reservation = {};
				reservation.lodgingId = this.lodgingId;
				reservation.fromDate = this.fromDate.getTime();
				reservation.toDate = this.toDate.getTime();
				ReservationService.reserve(reservation)
					.then( () => {
						this.status = 'Lodging reserved';
					}, () => {
						this.status = 'Error';
					});
			};
		}
	});
