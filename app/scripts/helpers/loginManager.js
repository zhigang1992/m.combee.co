define(['jquery-cookie', 'models/user'], function(jqueryCookie, User) {
	var loginUser = function(user) {
		$.cookie('private_token', user.get('private_token'));
		$.cookie('user_id', user.get('id'));
		$.cookie('user_name', user.get('name'));
		$.cookie('user_avatar', user.get('avatar'));
	};
	var loggedIn = function() {
		return $.cookie('private_token') ? true : false;
	};
	var privateToken = function() {
		return $.cookie('private_token');
	};
	return {
		loginUser: loginUser,
		loggedIn: loggedIn,
		privateToken: privateToken
	};
});