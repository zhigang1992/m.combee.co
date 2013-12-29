define(['backbone', 'router', 'views/header'], function (Backbone, Router, HeaderView) {
    var initialize = function (){
        Router.initialize()
        new HeaderView({
        	el: $('#header')
        });
    };
    return {
        initialize: initialize
    };
});