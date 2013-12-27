require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'text': '../bower_components/requirejs-text/text',
        'jquery-cookie': '../bower_components/jquery-cookie/jquery.cookie'
    }
});

require(['app', 'helper'], function (App, Helper) {
    Helper.setup();
    App.initialize();
});