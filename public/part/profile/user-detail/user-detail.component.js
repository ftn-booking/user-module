'use strict';

angular.module('profile.userDetail')
	.component('myUserDetail', {
		templateUrl: '/part/profile/user-detail/user-detail.template.html',
		controller: function(AuthenticationService) {
			AuthenticationService.getCurrentUser()
				.then( (response) => {
					this.user = response.data;
				}, () => {
					this.user = null;
				});
		}
	});
