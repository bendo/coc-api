import $j from 'jquery';
import ActionTypes from '../ActionTypes';
import {Promise} from 'es6-promise';

function event(type, data) {
    return {type: type, payload: data};
}

function pAjax(method, url, data) {
    return new Promise(function (resolve, reject) {
        $j.ajax({method: method, url: url, data: data, dataType: 'json'})
            .done(resolve)
            .fail(function (jqXHR, textStatus, errorThrown) {
                reject(new Error(`Ajax error: ${jqXHR}, ${textStatus}, ${errorThrown}}`));
            });
    });
}

function pGet(url, data) {
    return pAjax('GET', url, data);
}

function pPost(url, data) {
    return pAjax('POST', url, data);
}

function asyncEvent(type, promise) {
    return event(type, {promise: promise});
}

export function loadClan() {
    return asyncEvent(ActionTypes.LOAD_CLAN, pGet('https://set7z18fgf.execute-api.us-east-1.amazonaws.com/prod/', {
        route: 'getClanDetails',
        clanTag: '%239J8CUCCL'
    }))
}

