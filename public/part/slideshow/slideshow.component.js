'use strict';

angular.module('slideshow')
	.component('mySlideshow', {
		templateUrl: '/part/slideshow/slideshow.template.html',
		bindings: {
			imagePaths: '<'
		},
		controller: function(HostService) {
			this.imageHost = HostService.prefix;
			this.id = Math.random();
		}
	});
