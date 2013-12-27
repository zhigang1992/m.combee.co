define(['jquery'], function ($) {
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
            var value = $.cookie('private_token');
            if (value) {
                jqXHR.setRequestHeader("Private-Token", value);
            }
        });
    };
    return {setup:setupHelper};
});