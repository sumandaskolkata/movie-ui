import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/Movies'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

render(
    <Provider store={store}>
        {/* <App /> */}
        <div>hello</div>
    </Provider>
    , document.getElementById('root')
);
