define([], function(){
	
	var UserModel = Backbone.Model.extend({
		initalize: function(){
			console.log("woo new Model");
		},
		defaults: {
			usr_fname: '',
			usr_lname: '',
			usr_email: '',
			usr_password: '',
			usr_username: ''
		}
		idAttribute: "usr_id",
		urlRoot: "http://localhost/Projects/BorrowApp/barebones/V1/users/accounts"
	});

	return UserModel;
});

