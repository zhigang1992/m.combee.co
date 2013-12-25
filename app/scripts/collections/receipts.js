define(['backbone', 'models/receipt'], function(Backbone, Receipt) {
	var Receipts = Backbone.Collection.extend({
		url: '/api/v1/receipts',
		model: Receipt
	});
	return Receipts;
});