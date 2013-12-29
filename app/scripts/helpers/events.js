define([
	'backbone'
], function(Backbone) {
	var Events = _.clone(Backbone.Events);
	Events.loginUpdateKey = "UserLoginStatusUpdate";
	return Events;
})