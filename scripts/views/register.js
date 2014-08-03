define(["tpl!templates/register.htm", "models/UserModel"], function(template, UserModel){
	var RegisterView = Backbone.View.extend({
		el : "#content",
		events:{
			"click #btn_register": "validateUserInfo"
		},
		render: function(){
			var self = this;
			self.$el.html(template);
		},
		validateUserInfo: function(){
			var self = this;
			$("#registration_form").validate({

				rules: {

					regFirstName:{
						required: true
					},

					regLastName:{
						required: true
					},

					regUsername:{
						required: true
					},

					regEmail:{
						required: true
					},

					regPassword:{
						required: true
					}
				},

				messages:{
					regFirstName:{
						required: "Please enter your First Name"
					},

					regLastName:{
						required: "Please enter your Last Name"
					},

					regUsername:{
						required: "Please choose a Username"
					},

					regEmail:{
						required: "Please enter your Email Address"
					},

					regPassword:{
						required: "Please choose a Password"
					}
				},
				submitHandler: function(form){
					self.registerUser(form);
				}
			});
		},
		registerUser: function(form){
			var self = this, userModel = new UserModel();
			userModel.set("usr_fname",$("#regFirstName").val());
			userModel.set("usr_lname",$("#regLastName").val());
			userModel.set("usr_username",$("#regUsername").val());
			userModel.set("usr_email",$("#regEmail").val());
			userModel.set("usr_password",$("#regPassword").val());
			$.ajax({
				url: 'http://localhost/Projects/musicApp/barebones/V1/users/accounts',
				type: 'POST',
				data: userModel.attributes,
				success: function(resp){
					if(resp.success == 1){
						document.router.navigate("register_success", {trigger:true});
						return false;
					}
				}
			});
		}
	});
	return RegisterView;
});