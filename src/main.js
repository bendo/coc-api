import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Immutable from 'immutable';
import * as actions from './actions';

import App from './App';
import configureStore from './configureStore';

const initialState = Immutable.fromJS({});

const store = configureStore(initialState);

ReactDOM.render(<Provider store={store}><App/></Provider>, window.document.getElementById('react-app'));
store.dispatch(actions.loadClan());

