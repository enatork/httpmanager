/// <reference path="../../typings/jquery/jquery.d.ts" />

var defaults = {
    urlHost: 'http://localhost:3000'
}

class HttpManager{
    constructor(config?:any){
        if(config){
            defaults = $.extend(defaults, config);
        }
    }

    http(url: string, method: string, data?: any, dataType?: string, headers?: any):JQueryPromise<any>{
        dataType = dataType || 'json';

        return $.ajax({
            headers: headers || {},
            crossDomain : true,
            type: method,
            url: defaults.urlHost + url,
            data: data,
            success: (resp)=>{
                return resp;
            },

            dataType:dataType
        })
    }
}
export = HttpManager;
