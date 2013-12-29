define([
	'backbone', 
	'text!templates/commentCompose.html',
	'helpers/loginManager',
	'models/comment'
], function(Backbone, Template, loginManager, Comment) {
	var CommentComposeView = Backbone.View.extend({
		events: {
			'click .btn': 'saveComment'
		},
		saveComment: function(ev) {
			var message = this.$el.find("i");
			message.removeClass();
			var input = $('textarea').val();
			if (input.length) {
				ev.currentTarget.disabled = true;
				var view = this;
				this.postComment(input, {
					success: function(comment) {
						ev.currentTarget.disabled = false;
						message.addClass("message");
						message.html("发出去了，yeh...");
						$('textarea').val('');
						view.refreshComment();
						window.scrollTo(0,0);
					},
					error: function(comment) {
						ev.currentTarget.disabled = true;
						message.addClass("error");
						message.html("发送失败，请稍后重新发送...");
					}
				})
			} else {
				message.addClass("error");
				message.html("评论不能为空");
			}
		},
		postComment: function(comment, options) {
			var newComment = new Comment({
				postID: this.postID
			});
			newComment.save({
				body: comment
			}, options);
		},
		render: function(options) {
			this.postID = options.postID;
			this.refreshComment = options.refreshComment;
			this.$el.html(_.template(Template, loginManager.loggedInUser()))
		},
		reply: function(targetUser) {
			//Add text to the end of the line
		}
	});
	return CommentComposeView;
});