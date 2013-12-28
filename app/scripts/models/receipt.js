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
			es[es.length-1] = 'small_' + es[es.length-1];
			return es.join('/');
		},
		createdAt: function() {
			return this.get('post').created_at;
		},
		postDate: function() {
			return moment(this.createdAt()).fromNow();
		},
		postDateDetailed: function() {
			return moment(this.createdAt()).format('LLL');
		},
		attachments: function() {
			return this.get("post").attachments;
		},
		hasAttachments: function() {
			return this.attachments().length > 0;
		}
	});
	return Recipt;
});