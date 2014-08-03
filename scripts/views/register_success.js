define(["tpl!templates/register_success.htm", "models/UserModel"], function(template, UserModel){
	var RegisterSuccessView = Backbone.View.extend({
		el : "#content",
		events:{
			"click #from_reg_login": "user_login"
		},
		render: function(){
			var self = this;
			self.$el.html(template);
		},
		user_login: function(){
			var self = this;
			document.router.navigate("login", {trigger:true});
		}
	});
		
	return RegisterSuccessView;
});