define([
    'backbone', 
    'views/login', 
    'views/index',
    'views/posts',
    'helpers/loginManager'
], function (Backbone, LoginView, IndexView, PostsView, loginManager){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'showLogin',
            'logout': 'logoutUser',
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
            $("#content").empty();
            indexView.render();
        });
        var loginView = new LoginView({
            el: $("#content")
        });
        appRouter.on("route:showLogin", function (){
            $("#content").empty();
            loginView.render();
        });
        var postView = new PostsView({
            el: $("#content")
        });
        appRouter.on("route:showPost", function(id){
            $("#content").empty();
            postView.render({id: id});
        });
        appRouter.on("route:defaultAction", function (){
            appRouter.navigate("/login");
        });
        Backbone.history.start();
        appRouter.on("route:logoutUser", function() {
            alert("客官记得下次再来哦");
            loginManager.logoutUser();
            Backbone.history.navigate('', {trigger: true});
        });
    };

    return {
        initialize: initialize
    };
});