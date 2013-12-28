define(['backbone'], function(Backbone) {
	var Comment = Backbone.Model.extend({
		urlRoot: function() {
			return '/api/v1/posts/' + this.postID + '/comments';
		}
	});
	return Comment;
})