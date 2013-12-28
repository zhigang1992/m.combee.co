define([
    'backbone', 
    'views/login', 
    'views/index',
    'views/posts'
], function (Backbone, LoginView, IndexView, PostsView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'showLogin',
            'posts/:id': 'showPost',
            '*action': 'defaultAction'
        }
    });

    var initialize = function (){
        var appRouter = new AppRouter();
        var indexView = new IndexView({
            el: $("#content")
        });
        appRouter.on("route:index", function (){
            indexView.render();
        });
        var loginView = new LoginView({
            el: $("#content")
        });
        appRouter.on("route:showLogin", function (){
            loginView.render();
        });
        var postView = new PostsView({
            el: $("#content")
        });
        appRouter.on("route:showPost", function(id){
            postView.render({id: id});
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