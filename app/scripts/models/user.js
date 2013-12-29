define(['backbone'], function(Backbone) {
	var User = Backbone.Model.extend({
		mobileAvatar: function() {
			var es = this.get('avatar').split('/');
			es[es.length-1] = 'small_' + es[es.length-1];
			return es.join('/');
		}
	});
	return User;
});