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
            this.$login = $('<div class="login"></div>');
            this.$el.append(this.$login);
            this.render();
        },
        loginUser: function (ev){
            ev.currentTarget.disabled = true;
            var form = this.$login.find(".user-login-form")
            var user = new User();
            user.url = '/api/v1/session';
            var view = this;
            user.save(form.serializeObject(), {
                success: function(user) {
                    loginManager.loginUser(user);
                    Backbone.history.navigate('#', true);
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
                Backbone.history.navigate('#', true);
            } else {
                var template = _.template(loginTemplate, {});
                this.$login.html(template);                
            }
        }
    });
    return LoginView;
});