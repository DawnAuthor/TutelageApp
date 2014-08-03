define(["tpl!templates/contact.htm"], function(template)

{
     var ContactView = Backbone.View.extend({

          el : "#content",
     
          render: function()

          {
               var self = this;

               self.$el.html(template);
          },
     });

     return ContactView;

});