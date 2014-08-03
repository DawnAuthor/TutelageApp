define(['models/ItemModel'], function(ItemModel){
	
	var ItemsCollection = Backbone.Collection.extend({
		model: ItemModel,
		url: "http://localhost/Projects/BorrowApp/barebones/V1/items",
		parse: function(response){
			return response.data;
		}
	});
	return ItemsCollection;
});