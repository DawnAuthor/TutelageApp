define(['models/UserModel'], function(UserModel){
	
	var UsersCollection = Backbone.Collection.extend({
		model: UserModel,
		url: "http://localhost/Projects/BorrowApp/barebones/V1/users/accounts",
		parse: function(response){
			return response.data;
		}
	});
	return UsersCollection;
});