define([
	'backbone', 
	'models/receipt', 
	'text!templates/post.html', 
	'models/attachment',
	'views/comments',
	'views/commentCompose'
], function(Backbone, Receipt, Template, Attachment, CommentsView, CommentComposeView) {
	var PostView = Backbone.View.extend({
		setupSubViews: function() {
			this.$content = $("<div class='post-content'></div>");
			this.$el.append(this.$content);
			this.$comment = $("<div class='comments'></div>");
			this.$el.append(this.$comment);
			this.$commentCompose = $("<div class='comment-composes'></div>");
			this.$el.append(this.$commentCompose);
		},
		render: function(options) {
			var view = this;
			var receipt = new Receipt({
				id: options.id
			}); 
			receipt.fetch({
				success: function(receipt) {
					view.postID = receipt.get('post').id;
					view.$el.removeClass();
					view.$el.addClass('post');
					view.setupSubViews();
					view.$content.html(_.template(Template, {receipt: receipt, Attachment: Attachment}));
					view.setupCommentView();
					view.setupCommentComposeView();
				}
			});
		},
		setupCommentView: function() {
			this.commentView = new CommentsView({
				el: this.$comment
			});
			var view = this;
			this.commentView.render({
				postID: this.postID,
				clickUser: function(targetUser) {
					view.commentComposeView.reply(targetUser);
				}
			});
		},
		setupCommentComposeView: function() {
			this.commentComposeView = new CommentComposeView({
				el: this.$commentCompose
			});
			var view = this;
			this.commentComposeView.render({
				postID: this.postID,
				refreshComment: function(comment) {
					view.commentView.refreshComment(comment);
				}
			});
		}
	});
	return PostView;
});