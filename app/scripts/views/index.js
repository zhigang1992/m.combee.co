define(['backbone', 'collections/receipts', 'text!templates/receipts.html'], function(Backbone, Receipts, Template) {
	var IndexView = Backbone.View.extend({
		el: $(".content"),
		initialize: function() {
			this.receipts = new Receipts();
		},
		render: function() {
			var view = this;
			this.receipts.fetch({
				data: {
					'private_token': $.cookie('private_token')
				},
				success: function(receipts) {
					view.$el.html(_.template(Template, {receipts: receipts.models}));
				}
			});
		}
	});
	return IndexView;
});