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
        appRouter.on("route:index", function (){
            var indexView = new IndexView({
                el: $(".content")
            });
            indexView.render();
        });
        appRouter.on("route:showLogin", function (){
            var loginView = new LoginView({
                el: $(".content")
            });
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