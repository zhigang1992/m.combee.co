define([
	'backbone',
	'collections/comments',
	'text!templates/comments.html'
], function(Backbone, Comments, Template) {
	var CommentView = Backbone.View.extend({
		events: {
			'click .next-page-comment': 'nextPage',
			'click .pre-page-comment': 'prePage'
		},
		initialize: function() {
			this.currentPage = 1;
		},
		nextPage: function() {
			this.currentPage ++;
			this.fetchComments();
		},
		prePage: function() {
			this.currentPage --;
			this.fetchComments();
		},
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
				reset: true,
				data: {
					page: view.currentPage,
					per_page: 10
				},
				success: function(comments) {
					view.$el.html(_.template(Template, {
						comments: comments.models,
						currentPage: view.currentPage
					}));
				}
			});
		},
		refreshComment: function() {
			this.fetchComments();
		}
	});
	return CommentView;
});