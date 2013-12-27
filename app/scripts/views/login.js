define([
    'backbone',
    'text!templates/login.html',
    'models/user',
    'jquery-cookie'
], function (Backbone, loginTemplate, User, jqueryCookie) {
    var LoginView = Backbone.View.extend({
        el: $(".content"),
        events: {
            "click .sign-in": "loginUser"
        },
        initialize: function() {
            this.$login = $('<div class="login"></div>');
            this.$el.append(this.$login);
        },
        loginUser: function (ev){
            var form = this.$login.find(".user-login-form")
            var user = new User();
            user.url = '/api/v1/session';
            var view = this;
            user.save(form.serializeObject(), {
                success: function(user) {
                    $.cookie('private_token', user.get('private_token'));
                    $.cookie('user_id', user.get('id'));
                    Backbone.history.navigate('', true);
                }
            })
            return false;
        },
        render: function (){
            var template = _.template(loginTemplate, {});
            this.$login.html(template);
        }
    });
    return LoginView;
});