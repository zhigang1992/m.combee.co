define(['backbone', 'view/login'], function (Backbone, LoginView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'login': 'showLogin',
            '*action': 'defaultAction'
        }
    });

    var initialize = function (){
        var appRouter = new AppRouter();
        appRouter.on("route:showLogin", function (){
            var loginView = new LoginView();
            loginView.render();
        });
        appRouter.on("route:defaultAction", function (){
            appRouter.navigate("login");
        });
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});