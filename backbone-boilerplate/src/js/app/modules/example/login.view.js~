define(
	[
	'backbone',
	'../../entities/login.model',
	'templateregistry'
	],
	function(Backbone, LoginModel, JST) {
		'use strict';

		var LoginView = Backbone.View.extend({
		el: 'article',
		template: 'login.hbs',

		events:{
			'click #btnSubmit':  'authenticate',
		},

		authenticate: function(event) {
			event.preventDefault();
			var user = $("#username").val();
            var pass = $("#password").val();
            console.log("Authentication successful 2");
			/*validateUsername(user);*/
			$.ajax({
				dataType: "json",
				url: "js/app/modules/example/users.json",
				data: self.users,
				beforeSend: function(xhr) {
					xhr.overrideMimeType("application/json" );
				},
				success: function (data) {
					var username= user.split("@");
					console.log(username[0]);
					console.log("json charged successfully");
					for (var i=0; i< data.value.users.length; i++) {
						if (username[0] == data.value.users[i].username){
							if (pass == data.value.users[i].password){
								return alert("Todo valido");
							}else{
								return alert("Error: Password is not correct");
							}
						}else{
							return alert("Error: User does not exist");
						}
					}
				},
				error: function() { console.log('json not charged successfully'); }
			});
		
			console.log("Authentication successful");
 
    	},
    	
    	validateUsername: function(user){
    		
    	},
            
		initialize: function() {
			this.model = new LoginModel();
			this.tplFunction = JST[this.template];
			console.log("Se inicio la view");
			this.model.fetch();
			this.listenTo(this.model, 'change', this.render);
		},

		render: function() {
			this.$el.html(this.tplFunction(this.model.toJSON()));
		}

	});
	return LoginView;
}
);
