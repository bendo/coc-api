import ActionTypes from '../ActionTypes';
import {Promise} from 'es6-promise';
import fetch from 'isomorphic-fetch';
import URI from 'urijs';

function event(type, data) {
    return {type: type, payload: data};
}

function asyncEvent(type, promise) {
    return event(type, {promise: promise});
}

export function loadClan() {
    const url = new URI('https://set7z18fgf.execute-api.us-east-1.amazonaws.com').directory('prod').query({
        route: 'getClanDetails',
        clanTag: '%239J8CUCCL'
    });
    return asyncEvent(ActionTypes.LOAD_CLAN, fetch(url).then((response) => response.json()))
}