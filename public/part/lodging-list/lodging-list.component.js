'use strict';

angular.module('lodgingList')
	.component('myLodgingList', {
		templateUrl: '/part/lodging-list/lodging-list.template.html',
		controller: function(LodgingService) {
			this.fromDate = new Date();
			this.toDate = new Date();
			this.toDate.setDate(this.toDate.getDate() + 1);
			this.filterByDate = () => {
				LodgingService.getAvailable(this.fromDate.getTime(), this.toDate.getTime())
					.then( (response) => {
						this.lodgings = response.data;
					}, () => {
						this.lodgings = null;
					});
			};
			this.filterByDate();

			this.advancedEnabled = false;
			this.advancedReset = false;
			this.resetSearch = () => {
				this.search = {};
				this.advancedReset = !this.advancedReset;
			};

			this.order = null;
			this.isReverse = true;
			this.orderBy = (order) => {
				this.isReverse = (this.order === order) ? !this.isReverse : false;
				this.order = order;
			};

			this.formatType = (type) => {
				type = type.charAt(0).toUpperCase() + type.substr(1).toLowerCase();
				type = type.replace('_', ' ');
				return type;
			};
		}
	});
