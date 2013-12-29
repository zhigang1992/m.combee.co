define(['backbone', 'helpers/loginManager'], function(Backbone, loginManager) {
	var authorizedURL = function(attachment) {
		return attachment.url + '?private_token=' + loginManager.privateToken();
	};
	var isImage = function(attachment) {
		return attachment.image;
	};
	var imageThumbnailURL = function(attachment) {
		return this.authorizedURL(attachment);// + "&version=mobile";
	};
	return {
		authorizedURL: authorizedURL,
		isImage: isImage,
		imageThumbnailURL: imageThumbnailURL
	}
});