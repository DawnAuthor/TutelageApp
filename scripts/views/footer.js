define(["tpl!templates/footer.htm"], function(template)

{
     var FooterView = Backbone.View.extend(
     {
          events:
          {
               "click .homeButton": "goToHome"
          }, 

          el: "#footer",

          render: function()
          {
               var self = this;

               self.$el.html(template);
          },

          goToHome: function()
          {
               document.router.navigate("", {trigger: true});
          }
     });

     return FooterView;
});