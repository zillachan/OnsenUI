(function(){
	var directiveModules = angular.module('onsen.directives', []); // [] -> create new module

	directiveModules.factory('ONSEN_CONSTANTS', function() {
		var CONSTANTS = {
			DIRECTIVE_TEMPLATE_URL: "plugins/onsenui/templates"
		};

		return CONSTANTS;
	});
})();