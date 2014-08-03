define([],function(){

	var Router = Backbone.Router.extend({

		views:{},

		routes:{

			"" : "main",

			"login": "login",

			"register": "register",

			"contact": "contact",

			"user_profile":"user_profile",

			"users" : "users",
			
			"add_item": "add_item",

			"all_items": "all_items"

		},

		main: function()
		{
			var self = this;

			self.generateView("main");
		},

		login: function()
		{
			var self = this;
			self.generateView("login");
		},

		register: function()
		{
			var self = this;

			self.generateView("register");
		},

		contact: function()
		{
			var self = this;
			self.generateView("contact");
		},

		user_profile: function()
		{
			var self = this;

			self.generateView("user_profile");
		},

		users: function()
		{
			var self = this;

			self.generateView("users");
		},

		add_item: function(){
			var self = this;
			self.generateView("AddItemView");
		},

		all_items: function(){
			var self = this;
			self.generateView("ItemsListView");
		},

		generateView: function(viewName){

			var self = this;

			//flyweight implementation to avoid multiple view instances

			if(self.views[viewName]){

				self.views[viewName].render();

			}else{

				require(['views/' + viewName], function(view){

					var View = new view();

					self.views[viewName] = View;

					View.render();

				});

			}

		}

	});

	

	return Router;

});