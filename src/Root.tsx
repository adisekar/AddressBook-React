import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

interface IConnectedProps {
    children: any;
    initialState?: any;
}

const Root = ({ children, initialState = {} }: IConnectedProps) => {

    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxPromise)));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Root;