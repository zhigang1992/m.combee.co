define([
    'backbone',
    'text!templates/login.html',
    'models/user',
    'jquery-cookie',
    'helpers/loginManager'
], function (Backbone, loginTemplate, User, jqueryCookie, loginManager) {
    var LoginView = Backbone.View.extend({
        events: {
            "click .sign-in": "loginUser"
        },
        initialize: function() {
            this.render();
        },
        loginUser: function (ev){
            ev.currentTarget.disabled = true;
            var form = this.$el.find(".user-login-form")
            var user = new User();
            user.url = '/api/v1/session';
            var view = this;
            user.save(form.serializeObject(), {
                success: function(user) {
                    loginManager.loginUser(user);
                    Backbone.history.navigate('#', {trigger: true});
                },
                error: function(user) {
                    ev.currentTarget.disabled = false;
                    alert("Wrong");
                }
            })
            return false;
        },
        render: function (){
            if (loginManager.loggedIn()) {
                Backbone.history.navigate('#', {trigger: true});
            } else {
                this.$el.removeClass();
                this.$el.addClass('login');
                var template = _.template(loginTemplate, {});
                this.$el.html(template);                
            }
        }
    });
    return LoginView;
});