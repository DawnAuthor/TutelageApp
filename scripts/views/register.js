define(["tpl!templates/register.htm"], function(template)

{

     var RegisterView = Backbone.View.extend({

          

          el : "#content",

          

          events: 

          {

               "click #btn_register"    : "registerNewUser"

          },

          

          render: function()

          {

               var self = this;

               self.$el.html(template);

          },

          

          registerNewUser: function()

          {
               $("#registration_form").validate({

                    rules: {

                         regFirstName: 
                         {
                              required: true
                         },

                         regLastName: 
                         {
                              required: true
                         },

                         regUsername:
                         {
                              required: true
                         },

                         regEmail: 
                         {
                              required: true
                         },

                         regPassword:
                         {
                              required: true
                         }
                    },

                    messages: 
                    {
                         regFirstName: 
                         {
                              required: "Please enter your First Name"
                         },

                         regLastName: 
                         {
                              required: "Please enter your Last Name"
                         },

                         regUsername:
                         {
                              required: "Please choose a Username"
                         },

                         regEmail: 
                         {
                              required: "Please enter your Email Address"
                         },

                         regPassword:
                         {
                              required: "Please choose a Password"
                         }
                    },

                    submitHandler: function(form)
                    {
                         document.router.navigate("user_profile", {trigger:true});
                         return false;
                    }
                   
               });
          }


     });

     return RegisterView;

});