define(['backbone', 'models/receipt', 'text!templates/post.html', 'models/attachment'], function(Backbone, Receipt, Template, Attachment) {
	var PostView = Backbone.View.extend({
		render: function(options) {
			var view = this;
			var receipt = new Receipt({
				id: options.id
			});
			receipt.fetch({
				success: function(receipt) {
					view.$el.removeClass();
					view.$el.addClass('post');
					view.$el.html(_.template(Template, {receipt: receipt, Attachment: Attachment}));
				}
			});
		}
	});
	return PostView;
});