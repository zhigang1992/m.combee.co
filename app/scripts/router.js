define(['backbone', 'views/login', 'views/index'], function (Backbone, LoginView, IndexView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'login': 'showLogin',
            '': 'index',
            '*action': 'defaultAction'
        }
    });

    var initialize = function (){
        var appRouter = new AppRouter();
        appRouter.on("route:showLogin", function (){
            var loginView = new LoginView();
            loginView.render();
        });
        appRouter.on("route:index", function (){
            var indexView = new IndexView();
            indexView.render();
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