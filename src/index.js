import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Solar from './containers/Solar';
import * as serviceWorker from './serviceWorker';
import uiReducer from './storeConfigure/reducers/uiReducer'
import purchaseReducer from './storeConfigure/reducers/purchaseReducer'
import authReducer from './storeConfigure/reducers/authReducer'
import Spinner from './components/UI/spinner/Spinner'


const rootReducer = combineReducers({
    uiReducer: uiReducer,
    purchase: purchaseReducer,
    authReducer: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['uiReducer']
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <Solar />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.register();
