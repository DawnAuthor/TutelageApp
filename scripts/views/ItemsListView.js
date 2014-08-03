define(["tpl!templates/all_items.htm",'models/ItemModel','collections/ItemsCollection'], function(template,ItemModel,ItemsCollection)

{

     var ItemsListView = Backbone.View.extend({

          el: "#content", 
          events: {
               "click #btn_add_item": "onAddItem",
               "click #btn_show_form": "toggleForm"
          },
          prerender: function(cb){
               var self = this;
               if(!self.items){
                    self.items = new ItemsCollection();
                    self.items.fetch().done(function(){
                         self.prerender(cb);
                    });
               }else{
                    cb();
               }
          },  

          render: function(){
               var self = this;
               self.items = new ItemsCollection();
                    self.items.fetch().done(function(){
                         self.$el.html(template({items:self.items}));
                    });
                    bwa.log("hello world");
          },

          onAddItem: function(){
               var self = this;
               self.itemModel = new ItemModel();
               self.itemModel.set("itm_name", self.$("#itm_name").val());
               self.itemModel.set("itm_desc", self.$("#itm_desc").val());
               $.ajax({
                    url: 'http://localhost/Projects/BorrowApp/barebones/V1/items',
                    type: 'post',
                    data: self.itemModel.attributes,
                    success: function(){
                         self.render();
                    }
               });
              
          },
          toggleForm: function(){
               var self = this;
               if($("#add_details_form").is(":hidden"))
               {
                    $("#add_details_form").toggle(1000);
                    $("#btn_add_item").toggle(1000);
                    $("#btn_show_form").val("Cancel");
               }
               else
               {
                    $("#add_details_form").toggle(1000);
                    $("#btn_add_item").toggle(1000);
                    $("#btn_show_form").val("Add Item To Collection");
               }
          }
     });

     return ItemsListView;
});