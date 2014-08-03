define([], function(){
	
	var ItemModel = Backbone.Model.extend({
		initalize: function(){
		},
		idAttribute: "itm_id",
		urlRoot: "http://localhost/Projects/BorrowApp/barebones/V1/items",

		save: function(item){
			$.ajax({
				url: 'http://localhost/Projects/BorrowApp/barebones/V1/items',
				type: 'post',
				data: item.attributes,
				success: function(){
					document.router.navigate("all_items", {trigger: true});
				}
			});
		}
	});

	return ItemModel;
});

