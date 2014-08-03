define(['tpl!templates/users.htm','collections/UsersCollection',
	'css!css/bootstrap.css'], 
function(template, UsersCollection){
	
	var Users = Backbone.View.extend({
		el: "#content",
		prerender: function(cb){
			var self = this;
			if(!self.users){
				self.users = new UsersCollection();
				self.users.fetch().done(function(){
					self.prerender(cb);
				});
			}else{
				cb();
			}
		},
		render: function(){
			var self = this;
			self.prerender(function(){
				self.$el.html(template({users: self.users}));
			});
		}
	});

	return Users;

});