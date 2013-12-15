define([
    'backbone',
    'text!templates/login.html'
], function (Backbone, loginTemplate) {
    var LoginView = Backbone.View.extend({
        el: $(".login"),
        initialize: function (){
        },
        render: function (){
            var template = _.template(loginTemplate, {});
            this.$el.html(template);
        }
    });
    return LoginView;
});