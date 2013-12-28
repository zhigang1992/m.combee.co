define([
	'backbone', 
	'collections/receipts', 
	'text!templates/receipts.html',
	'helpers/loginManager',
	'helpers/events'
], function(Backbone, Receipts, Template, loginManager, events) {
	var IndexView = Backbone.View.extend({
		initialize: function() {
			this.receipts = new Receipts();
			this.listenTo(events, events.loginUpdateKey, this.render);
		},
		render: function() {
			if (!loginManager.loggedIn()) {
				Backbone.history.navigate('#', {trigger: true});
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