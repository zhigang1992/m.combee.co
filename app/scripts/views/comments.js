define([
	'backbone',
	'collections/comments',
	'text!templates/comments.html'
], function(Backbone, Comments, Template) {
	var CommentView = Backbone.View.extend({
		render: function(options) {
			this.postID = options.postID;
			this.comments = new Comments({
				postID: options.postID
			});
			this.fetchComments();
		},
		fetchComments: function() {
			var view = this;
			this.comments.fetch({
				success: function(comments) {
					view.$el.html(_.template(Template, {comments: comments.models}));
				}
			});
		},
		refreshComment: function() {
			this.fetchComments();
		}
	});
	return CommentView;
});