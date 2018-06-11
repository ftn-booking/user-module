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
				if(this.rating)
					return new Array(parseInt(this.rating));
			};
			this.empty = () => {
				if(this.rating && this.rating <= this.max)
					return new Array(this.max - parseInt(this.rating));
			};
		}
	});
