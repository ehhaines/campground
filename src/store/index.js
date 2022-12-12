import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import usersReducer from "../Profile/users-reducer";
import npsReducer from "../nps/nps-reducer";
import parksReducer from "../Park/parks-reducer";
import reviewsReducer from '../Review/reviews-reducer';
import anonUserReducer from '../AnonProfile/anon-user-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['nps', 'parks', 'reviews', 'anonUser'],
    whitelist: ['users']
}
const reducers = combineReducers({
    users: usersReducer,
    nps: npsReducer,
    parks: parksReducer,
    reviews: reviewsReducer,
    anonUser: anonUserReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})