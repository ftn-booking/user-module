'use strict';

angular.module('messageList')
	.component('myMessageList', {
		templateUrl: '/part/message-list/message-list.template.html',
		controller: function(MessageService) {
			MessageService.getAll()
				.then( (response) => {
					this.messages = response.data;
				});
		}
	});
