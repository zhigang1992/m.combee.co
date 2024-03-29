define(['backbone'], function(Backbone) {
	var Comment = Backbone.Model.extend({
		initialize: function(options) {
			this.postID = options.postID;
		},
		urlRoot: function() {
			return '/api/v1/posts/' + this.postID + '/comments';
		},
		mobileAvatar: function() {
			var es = this.get('user').avatar.split('/');
			es[es.length-1] = 'small_' + es[es.length-1];
			return es.join('/');
		},
		postDate: function() {
			return moment(this.get('created_at')).fromNow();
		}
	});
	return Comment;
})