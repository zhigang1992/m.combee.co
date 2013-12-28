define([
    'jquery',
    'moment', 
    'moment-sc', 
    'helpers/loginManager'
    ], function ($, moment, momentSC, loginManager) {
    var setupHelper = function (){
        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            if (loginManager.loggedIn()) {
                jqXHR.setRequestHeader("Private-Token", loginManager.privateToken());
            }
        });
        moment.lang('zh-cn');
    };
    return {setup:setupHelper};
});