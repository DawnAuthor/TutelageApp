define(["tpl!templates/main.htm", "views/navbar", "views/footer", "css!css/bootstrap.css", "css!css/content.css"], function(template, Navbar, Footer)
{
     var MainView = Backbone.View.extend(
     {
          initialize: function()
          {
               var self = this, navbar, footer;

               navbar = new Navbar().render();
               footer = new Footer().render();
          },          

          el: "#content",          

          render: function()
          {
               var self = this;
               //render main login view template
                self.$el.empty();
                self.$el.html(template);

                $('#tabBar a:first').tab('show');

                $('.lightbox').click(function(){
            
                    $('.backdrop').animate({'opacity': '.80'}, 800, 'linear');
                    //$('.box').animate({'opacity': '1.00'}, 300, 'linear');
                    $('.backdrop, .box').css('display', 'block');
                  
                    $('.box').draggable({containment: 'document'});     
               });
       
       
               $('.close').click(function(){
                    self.closeBox();
               });
       
               $('.backdrop').click(function(){
                    self.closeBox();
               });
          },

      closeBox: function()
      {
          $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
          $('.backdrop, .box').css('display', 'none');
           });
      }

     });

     return MainView;
});
