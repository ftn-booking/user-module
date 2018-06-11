'use strict';

angular.module('stars')
	.component('myStars', {
		templateUrl: '/part/stars/stars.template.html',
		bindings: {
			rating: '<',
			max: '<'
		},
		controller: function() {
			this.full = () => {
				return new Array(parseInt(this.rating));
			};
			this.empty = () => {
				return new Array(this.max - parseInt(this.rating));
			};
		}
	});
