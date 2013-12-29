define([
	'backbone', 
	'collections/receipts', 
	'text!templates/receipts.html',
	'helpers/loginManager',
	'helpers/events'
], function(Backbone, Receipts, Template, loginManager, events) {
	var IndexView = Backbone.View.extend({
		events: {
			'click .next-page': 'nextPage',
			'click .pre-page': 'prePage'
		},
		initialize: function() {
			this.receipts = new Receipts();
			this.listenTo(events, events.loginUpdateKey, this.render);
			this.currentPage = 1;
		},
		nextPage: function() {
			this.currentPage ++;
			this.render();
		},
		prePage: function() {
			this.currentPage --;
			this.render();
		},
		render: function() {
			if (!loginManager.loggedIn()) {
				Backbone.history.navigate('login', {trigger: true});
			} else {
				this.$el.removeClass();
				this.$el.addClass('receipts');
				var view = this;
				this.receipts.fetch({
					reset: true,
					data: {
						page: this.currentPage
					},
					success: function(receipts) {
						view.$el.html(_.template(Template, {
							receipts: receipts.models,
							currentPage: view.currentPage
						}));
						window.scrollTo(0,0);
					}
				});				
			}
		}
	});
	return IndexView;
});