define(
  [
    'backbone'
  ],
	function(Backbone) {
		'use strict';

		var LoginModel = Backbone.Model.extend({

		parse: function(response) {
			return response.value;
		},
		
		url: function() {
        	return 'http://api.icndb.com/jokes/';
      	},

		fetch: function(options) {
			console.log("fetch model");
			options = options || {};
			options.dataType = options.dataType || 'jsonp';
			return Backbone.Model.prototype.fetch.apply(this, [options]);
		}
		});
		return LoginModel;
	}
);
