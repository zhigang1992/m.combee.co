require.config({
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone'
    }
});

require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    console.log($);
});