import {applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {SUFFIXES_FOR_MIDDLEWARE} from './util/promiseMiddlewareSuffixes';

import reducer from './reducer';

export default function configureStore(initialState) {
    const middlewareChain = applyMiddleware(promiseMiddleware({
        promiseTypeSuffixes: SUFFIXES_FOR_MIDDLEWARE
    }));

    return createStore(reducer, initialState, middlewareChain);
}

