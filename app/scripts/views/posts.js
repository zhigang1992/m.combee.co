define(['backbone', 'models/receipt', 'text!templates/post.html'], function(Backbone, Receipt, Template) {
	var PostView = Backbone.View.extend({
		render: function(options) {
			var view = this;
			var receipt = new Receipt({
				id: options.id
			});
			receipt.fetch({
				success: function(receipt) {
					view.$el.html(_.template(Template, {receipt: receipt}));
				}
			});
		}
	});
	return PostView;
});