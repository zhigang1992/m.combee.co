define([
	'backbone', 
	'collections/receipts', 
	'text!templates/receipts.html',
	'helpers/loginManager'
], function(Backbone, Receipts, Template, loginManager) {
	var IndexView = Backbone.View.extend({
		initialize: function() {
			this.receipts = new Receipts();
		},
		render: function() {
			if (!loginManager.loggedIn()) {
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