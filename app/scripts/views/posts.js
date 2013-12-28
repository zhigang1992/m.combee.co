define([
	'backbone', 
	'models/receipt', 
	'text!templates/post.html', 
	'models/attachment',
	'views/comments'
], function(Backbone, Receipt, Template, Attachment, CommentsView) {
	var PostView = Backbone.View.extend({
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
					view.$el.html(_.template(Template, {receipt: receipt, Attachment: Attachment}));
					view.setupCommentView();
				}
			});
		},
		setupCommentView: function() {
			this.$comment = $("<div class='comments'></div>");
			this.$el.append(this.$comment);
			var commentView = new CommentsView({
				el: this.$comment
			});
			commentView.render({postID: this.postID});
		}
	});
	return PostView;
});