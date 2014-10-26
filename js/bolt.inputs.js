

(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery', './bolt', './jquery.event.activate'], module);
	} else {
		// Browser globals
		module(jQuery, jQuery.bolt);
	}
})(function(jQuery, bolt, undefined){
	bolt('input, select, textarea', {
		enable: function(e, data, fn) {
		},

		disable: function(e, data, fn) {
		},

		check: function(e, data, fn) {
		},

		uncheck: function(e, data, fn) {
		}
	}, {
		'[for]': {
			'click': function(e, node, data) {
				
			}
		}
	});
});