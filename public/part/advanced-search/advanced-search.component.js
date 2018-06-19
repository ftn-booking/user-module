'use strict';

angular.module('advancedSearch')
	.component('myAdvancedSearch', {
		templateUrl: '/part/advanced-search/advanced-search.template.html',
		bindings: {
			reset: '<',
			onChange: '&'
		},
		controller: function(TypeService) {
			TypeService.getLodgingTypes()
				.then( (response) => {
					this.lodgingTypes = response.data;
				});
			TypeService.getFoodTypes()
				.then( (response) => {
					this.foodTypes = response.data;
				});
			TypeService.getFeatureTypes()
				.then( (response) => {
					this.featureTypes = response.data;
				});

			this.$onChanges = (changes) => {
				if(changes.reset) {
					this.search = {};
					this.change();
				}
			};

			this.change = () => {
				this.onChange({search: this.search});
			};
		}
	});
