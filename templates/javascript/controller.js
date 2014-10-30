(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name <%= name %>.controller:<%= classedName %>Controller
	 * @description
	 * # <%= classedName %>Controller
	 * Controller of the <%= name %> module
	 */
	angular
		.module('<%= name %>')
	  	.controller('<%= classedName %>Controller', <%= cameledName %>Controller);

  	<%= cameledName %>Controller.$inject = ['$scope', 'authService', 'logger', 'orgService', '$state'];

  	function <%= cameledName %>Controller($scope, authService, logger, orgService, $state) {
  		var vm = this;

  		//do stuff here
	}

}());