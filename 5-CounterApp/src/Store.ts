// Store
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import { reducer, State } from './reducers/CounterReducer';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type AppState = {
    state: State
};

const createStore = () => {
    //persistの設定
    const persistConfig = {
        key: 'root',
        storage
    }

    const reducers = combineReducers<AppState>({
        state: reducer
    })

    const store = reduxCreateStore(
        persistReducer(persistConfig, reducers),
        applyMiddleware(
            //thunk
        )
    );
    const persistor = persistStore(store);

    return { store, persistor };
}

export default createStore