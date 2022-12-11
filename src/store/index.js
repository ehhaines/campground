import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import usersReducer from "../Profile/users-reducer";
import npsReducer from "../nps/nps-reducer";
import parksReducer from "../Park/parks-reducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['nps', 'parks'],
    whitelist: ['users']
}
const reducers = combineReducers({
    users: usersReducer,
    nps: npsReducer,
    parks: parksReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})