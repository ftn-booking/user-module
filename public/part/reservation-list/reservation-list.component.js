'use strict';

angular.module('reservationList')
	.component('myReservationList', {
		templateUrl: '/part/reservation-list/reservation-list.template.html',
		controller: function(ReservationService, CommentService, MessageService) {
			ReservationService.getAll()
				.then( (response) => {
					this.reservations = response.data;
				});

			this.comment = (reservation) => {
				let request = {};
				request.reservationId = reservation.id;
				request.content = reservation.newComment;
				CommentService.add(request)
					.then( () => {
						reservation.commentStatus = 'Comment submited successfully';
					}, () => {
						reservation.commentStatus = 'Error';
					});
			};

			this.rate = (reservation) => {
				ReservationService.rate(reservation.id, reservation.newRating)
					.then( (response) => {
						reservation.lodging.rating = response.data.newRating;
						reservation.rating = reservation.newRating;
					});
			};

			this.cancel = (reservation) => {
				ReservationService.cancel(reservation.id)
					.then( () => {
						let index = this.reservations.indexOf(reservation);
						this.reservations.splice(index, 1);
					});
			};

			this.message = (reservation) => {
				let request = {};
				request.reservationId = reservation.id;
				request.content = reservation.newMessage;
				MessageService.add(request)
					.then( () => {
						reservation.messageStatus = 'Message submited successfully';
					}, () => {
						reservation.messageStatus = 'Error';
					});
			};
		}
	});
