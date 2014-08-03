define(["tpl!templates/add_item.htm",'models/ItemModel','collections/ItemsCollection'], function(template,ItemModel,ItemsCollection)

{

     var AddItemView = Backbone.View.extend({

          el: "#content", 
          events: {
               "click #save_item": "onSaveItem",
               "click #cancel_item_add": "onCancel"
          },
          prerender: function(cb){
               var self = this;
               self.items = new ItemsCollection();
               self.items.fetch().done(function(){
                    cb();
               });
          },

          render: function(){
               var self = this;
               self.prerender(function(){
                    self.$el.html(template);
                    self.itemModel = new ItemModel();
               });
          },

          onSaveItem: function(){
               var self = this;
               self.itemModel = new ItemModel();
               self.itemModel.set("itm_name", self.$("#itm_name").val());
               self.itemModel.set("itm_desc", self.$("#itm_desc").val());
               // self.items.create(self.itemModel);
               self.itemModel.save(self.itemModel);
               // self.$("#add_item_form").validate({


               //      rules: {

               //           itm_name: 
               //           {
               //                required: true
               //           },

               //           itm_desc: 
               //           {
               //                required: true
               //           }
               //      },

               //      messages: 
               //      {
               //           itm_name: 
               //           {
               //                required: "Please Enter a Name for your Item."
               //           },

               //           itm_desc: 
               //           {
               //                required: "Please Enter a Description for your Item."
               //           }
               //      },

               //      submitHandler: function(form)
               //      {
               //           self.itemModel.set("itm_name", self.$("#item_name").val());
               //           self.itemModel.set("itm_desc", self.$("#item_desc").val());
               //           self.itemModel.save();
               //          // document.router.navigate("all_items", {trigger:true});
               //           return false;
               //      }
                   
               // });
          },

          onCancel: function(){
               var self = this;
               document.router.navigate('all_items', {trigger:true});
          }
     });

     return AddItemView;
});