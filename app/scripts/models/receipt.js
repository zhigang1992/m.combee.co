define(['backbone'], function(Backbone) {
	var Recipt = Backbone.Model.extend({
		title: function() {
			return this.get('post').title;
		},
		author: function() {
			return this.get('post').author;
		},
		avatar: function() {
			return this.author().avatar;
		},
		mobileAvatar: function() {
			var es = this.avatar().split('/');
			es[es.length-1] = 'mobile_' + es[es.length-1];
			return es.join('/');
		}
	});
	return Recipt;
});