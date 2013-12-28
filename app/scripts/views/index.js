define(['backbone', 'collections/receipts', 'text!templates/receipts.html'], function(Backbone, Receipts, Template) {
	var IndexView = Backbone.View.extend({
		initialize: function() {
			this.receipts = new Receipts();
		},
		render: function() {
			if ($.cookie('private_token') == undefined) {
				Backbone.history.navigate('#login', true);
			} else {
				var view = this;
				this.receipts.fetch({
					success: function(receipts) {
						view.$el.html(_.template(Template, {receipts: receipts.models}));
					}
				});				
			}
		}
	});
	return IndexView;
});