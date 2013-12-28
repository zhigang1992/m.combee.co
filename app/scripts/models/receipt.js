define(['backbone', 'moment'], function(Backbone, moment) {
	var Recipt = Backbone.Model.extend({
		urlRoot: '/api/v1/receipts',
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
		},
		postDate: function() {
			return moment(this.get('post').created_at).fromNow();
		}
	});
	return Recipt;
});