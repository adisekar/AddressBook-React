import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';
import ErrorBoundary from 'components/ErrorBoundary';

interface IConnectedProps {
    children: any;
    initialState?: any;
}

const Root = ({ children, initialState = {} }: IConnectedProps) => {

    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxPromise)));

    return (
        <Provider store={store}>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </Provider>
    );
};

export default Root;