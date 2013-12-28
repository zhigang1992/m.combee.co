define(['backbone', 'text!templates/header.html'], function(Backbone, Template) {
	var HeaderView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		render: function() {
			console.log('test');
			this.$el.html(_.template(Template, {
				name: 'Kyle',
				avatar: '/uploads/avatar/user/mobile_521481886c55e5d7ae000001_645285b125a20627acf9c55e6066b61d.jpeg'
			}));
		}
	});
	return HeaderView;
});