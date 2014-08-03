define(["tpl!templates/navbar.htm"], function(template)

{
     var NavbarView = Backbone.View.extend(

     {
          el: "#navbar",

          events:

          {
               "click #nav_home"        : "goToHome",
               "click #nav_login"       : "goToLogin",   
               "click #nav_register"    : "goToRegister",
               "click #nav_contact"     : "goToContact",
               "click #nav_users"       :  "goToUsers",
               "click #nav_items"       : "goToItems"
          },

          render: function()

          {
               var self = this;

               self.$el.html(template);
          },

          goToHome: function()

          {
               document.router.navigate("", {trigger: true});
          },

          goToLogin: function()
          {
               document.router.navigate("login", {trigger: true});
          },

          goToRegister: function()

          {
               document.router.navigate("register", {trigger: true});
          }
     });

     return NavbarView;
});