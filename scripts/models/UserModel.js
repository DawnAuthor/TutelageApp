define([], function(){
	
	var UserModel = Backbone.Model.extend({
		defaults: {
			usr_fname: '',
			usr_lname: '',
			usr_email: '',
			usr_password: '',
			usr_username: ''
		},
		idAttribute: "usr_id",
		urlRoot: "http://localhost/Projects/musicApp/barebones/V1/users/accounts"
	});

	return UserModel;
});

