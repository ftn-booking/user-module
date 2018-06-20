'use strict';

angular.module('reservationList')
	.component('myReservationList', {
		templateUrl: '/part/reservation-list/reservation-list.template.html',
		controller: function(ReservationService) {
			ReservationService.getAll()
				.then( (response) => {
					this.reservations = response.data;
				});
			};
		}
	});
