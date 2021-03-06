'use strict';

angular.module('lodgingList')
	.component('myLodgingList', {
		templateUrl: '/part/lodging-list/lodging-list.template.html',
		controller: function(LodgingService, PriceService) {
			this.fromDate = new Date();
			this.toDate = new Date();
			this.toDate.setDate(this.toDate.getDate() + 1);
			this.filterByDate = () => {
				if(this.toDate < this.fromDate) {
					this.toDate = new Date(this.fromDate);
					this.toDate.setDate(this.toDate.getDate() + 1);
				}
				LodgingService.getAvailable(this.fromDate.getTime(), this.toDate.getTime())
					.then( (response) => {
						this.lodgings = response.data;
						for(let lodging of this.lodgings) {
							for(const feature of lodging.featureType) {
								lodging['has' + feature.name] = true;
							}
							PriceService.getActive(lodging.id, this.fromDate.getTime())
								.then( (response) => {
									lodging.price = response.data;
								});
						}
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

		}
	});
