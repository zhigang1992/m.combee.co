define([
	'jquery-cookie',
	'models/user',
	'helpers/events'
], function(jqueryCookie, User, Events) {
	var loginUser = function(user) {
		$.cookie('private_token', user.get('private_token'));
		$.cookie('user_id', user.get('id'));
		$.cookie('user_name', user.get('name'));
		$.cookie('user_avatar', user.mobileAvatar());
		Events.trigger(Events.loginUpdateKey, {});
	};
	var loggedIn = function() {
		return $.cookie('private_token') ? true : false;
	};
	var loggedInUser = function() {
		return {
			id: $.cookie('user_id'),
			name: $.cookie('user_name'),
			avatar: $.cookie('user_avatar')
		};
	};
	var privateToken = function() {
		return $.cookie('private_token');
	};
	return {
		loginUser: loginUser,
		loggedIn: loggedIn,
		loggedInUser: loggedInUser,
		privateToken: privateToken
	};
});