define(["tpl!templates/login.htm"], function(template){
	var LoginVIew = Backbone.View.extend({
		events:{
			"click #btn_login": "login"
		},

		el: "#content",

		render: function(){
			var self = this;

			self.$el.html(template);

			$('#showRecoverForm').click(function(){
				$("#loginForm").fadeOut(1000, function(){
					$("#recoverForm").fadeIn(1000);
				});
			});

			 $('#showLoginForm').click(function(){
				$("#recoverForm").fadeOut(1000, function(){
					$("#loginForm").fadeIn(1000);
				});
			});

			$('#showModal').click(function(){
				$('#myModal').modal('show');
			});

			$('#example').hover(function(){
				$('#example').popover('show');
			},
			function(){
				$('#example').popover('hide');
			});

			$('#ttEx').hover(function(){
				$('#ttEx').tooltip('show');
			},
			function(){
				$('#ttEx').tooltip('hide');
			});
			
		},

		 login: function(e){
			var self = this, data = {};
			e.preventDefault();
			data.usr_email = $("#loginEmail").val();
			data.usr_password = $("#loginPassword").val();
			$.ajax({
				url: "http://localhost/Projects/musicApp/barebones/V1/users/login",
				type: 'POST',
				data: data,
				success: function(resp){
					console.log(resp);
				}
			});
		}

		// validateLogin: function()
		// {
		// 	$("#login_form").validate({

		// 		rules: {

		// 			user_username: 
		// 			{
		// 				required: true
		// 			},

		// 			user_password: 
		// 			{
		// 				required: true
		// 			}
		// 		},

		// 		messages: 
		// 		{
		// 			user_username: 
		// 			{
		// 				required: "Please enter a username"
		// 			},

		// 			user_password: 
		// 			{
		// 				required: "Please enter your password"
		// 			}
		// 		},

		// 		submitHandler: function(form)
		// 		{
		// 			document.router.navigate("user_profile", {trigger:true});
		// 			return false;
		// 		}
		// 	});
		// }

	});



	return LoginVIew;

});