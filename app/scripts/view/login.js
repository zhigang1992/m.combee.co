define([
    'backbone',
    'text!templates/login.html'
], function (Backbone, loginTemplate) {
    var LoginView = Backbone.View.extend({
        el: $(".login"),
        events: {
            "click .sign-in": "loginUser"
        },
        loginUser: function (ev){
            console.log($(".user-login-form").serializeObject());
            return false;
        },
        render: function (){
            var template = _.template(loginTemplate, {});
            this.$el.html(template);
        }
    });
    return LoginView;
});