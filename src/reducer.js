import {Types} from './actions';
import Immutable from 'immutable';
import {fulfilled} from './util/promiseMiddlewareSuffixes';

function loadClan(payload) {
    window.console.log('loadClan', payload);
    return Immutable.fromJS(payload.clanDetails.results);
}

function prevPage(state, payload) {
    window.console.log('prevPage', payload);
    window.Comparator.nextViewPage(-1);
    return state;
}

function nextPage(state, payload) {
    window.console.log('nextPage', payload);
    window.Comparator.nextViewPage(1);
    return state;
}

export default function (state, {type, payload}) {
    switch (type) {
        case fulfilled(Types.LOAD_CLAN):
            return loadClan(payload);

        case Types.PREV_PAGE:
            return prevPage(state, payload);

        case Types.NEXT_PAGE:
            return nextPage(state, payload);

        default:
            return state;
    }
}

