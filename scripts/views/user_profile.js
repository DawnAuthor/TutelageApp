define(["tpl!templates/user_profile_tpl.htm"], function(template)
{
     var UserProfileView = Backbone.View.extend(
     {
          el: "#content",
          
          render: function()
          {
               var self = this;
               self.$el.html(template);
         }

     });

     return UserProfileView;
});