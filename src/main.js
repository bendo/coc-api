import $j from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import * as ClanActions from './actions/ClanActions';
import ClanContainer from './containers/ClanContainer';
import ActionTypes from './ActionTypes';
import shortid from 'shortid';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

function mainReducer(state = initialState, {type, payload}) {
    if (type.endsWith('_PENDING')) {
        return state.set('loading', true);
    }
    if (type.endsWith('_REJECTED')) {
        return state.set('error', true).set('loading', false);
    }
    switch (type) {
        case 'LOAD_CLAN_FULFILLED':
            return Immutable.fromJS(payload.clanDetails.results);
        default:
            return state;
    }
}

let store = createStore(mainReducer, initialState, applyMiddleware(promiseMiddleware()));

$j(function () {
    ReactDOM.render(
        <Provider store={store}><ClanContainer/></Provider>, document.getElementById('react-app')
    );
    store.dispatch(ClanActions.loadClan());
});
