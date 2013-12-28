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
				this.$el.html(_.template(Template, {
					name: 'Kyle',
					avatar: '/uploads/avatar/user/mobile_521481886c55e5d7ae000001_645285b125a20627acf9c55e6066b61d.jpeg'
				}));
			} else {
				this.$el.hide();
			}
		}
	});
	return HeaderView;
});