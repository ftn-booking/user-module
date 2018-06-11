'use strict';

angular.module('advancedSearch')
	.component('myAdvancedSearch', {
		templateUrl: '/part/advanced-search/advanced-search.template.html',
		bindings: {
			reset: '<',
			onChange: '&'
		},
		controller: function() {
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
