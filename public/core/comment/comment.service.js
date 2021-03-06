'use strict';

angular.module('core.comment')
	.service('CommentService', function(HostService, $http) {
		const prefix = HostService.prefix;

		this.getAll = (id) => {
			return $http.get(`${prefix}/api/comments/lodging/${id}`);
		};
		this.add = (data) => {
			return $http.post(`${prefix}/api/comments`, data);
		};
	});
