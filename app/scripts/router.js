define(['backbone', 'views/login', 'views/index'], function (Backbone, LoginView, IndexView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'showLogin',
            '*action': 'defaultAction'
        }
    });

    var initialize = function (){
        var appRouter = new AppRouter();
        var indexView = new IndexView({
            el: $(".content")
        });
        appRouter.on("route:index", function (){
            indexView.render();
        });
        var loginView = new LoginView({
            el: $(".content")
        });
        appRouter.on("route:showLogin", function (){
            loginView.render();
        });
        appRouter.on("route:defaultAction", function (){
            appRouter.navigate("/login");
        });
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});