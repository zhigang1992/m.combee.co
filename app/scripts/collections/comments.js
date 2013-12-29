define(['backbone', 'models/comment'], function(Backbone, Comment) {
	var Comments = Backbone.Collection.extend({
		url: function() {
			return '/api/v1/posts/' + this.postID + '/comments';
		},
		model: Comment,
		initialize: function(options) {
			this.postID = options.postID;
		}
	});
	return Comments;
});