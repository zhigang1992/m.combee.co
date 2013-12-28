define([
	'backbone',
	'collections/comments',
	'text!templates/comments.html'
], function(Backbone, Comments, Template) {
	var CommentView = Backbone.View.extend({
		render: function(options) {
			var comments = new Comments({
				postID: options.postID
			});
			var view = this;
			comments.fetch({
				success: function(comments) {
				console.log(comments);
					view.$el.html(_.template(Template, {}));
				}
			});
		}
	});
	return CommentView;
});