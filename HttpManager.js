/// <reference path="../../typings/jquery/jquery.d.ts" />
var defaults = {
    urlHost: 'http://localhost:3000'
};
var HttpManager = (function () {
    function HttpManager(config) {
        if (config) {
            defaults = $.extend(defaults, config);
        }
    }
    HttpManager.prototype.http = function (url, method, data, dataType, headers) {
        dataType = dataType || 'json';
        return $.ajax({
            headers: headers || {},
            crossDomain: true,
            type: method,
            url: defaults.urlHost + url,
            data: data,
            success: function (resp) {
                return resp;
            },
            dataType: dataType
        });
    };
    return HttpManager;
})();
module.exports = HttpManager;
//# sourceMappingURL=HttpManager.js.map