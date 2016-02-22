import ActionTypes from '../ActionTypes';
import {Promise} from 'es6-promise';
import fetch from 'isomorphic-fetch';

function event(type, data) {
    return {type: type, payload: data};
}

function asyncEvent(type, promise) {
    return event(type, {promise: promise});
}

export function loadClan() {
    return asyncEvent(ActionTypes.LOAD_CLAN,
        fetch('https://set7z18fgf.execute-api.us-east-1.amazonaws.com/prod/?route=getClanDetails&clanTag=%239J8CUCCL')
            .then((response) => response.json()))
}