define([
	'backbone', 
	'text!templates/header.html', 
	'helpers/events',
	'helpers/loginManager'
], function(Backbone, Template, events, loginManager) {
	var HeaderView = Backbone.View.extend({
		initialize: function() {
			this.render();
			this.listenTo(events, events.loginUpdateKey, this.render);
		},
		render: function() {
			if (loginManager.loggedIn()) {
				this.$el.show();
				this.$el.html(_.template(Template, loginManager.loggedInUser()));
			} else {
				this.$el.hide();
			}
		}
	});
	return HeaderView;
});