import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import usersReducer from "../Profile/users-reducer";
import npsReducer from "../nps/nps-reducer";
import parksReducer from "../Park/parks-reducer";
import reviewsReducer from '../Review/reviews-reducer';
import anonUserReducer from '../AnonProfile/anon-user-reducer';
import tripsReducer from '../Trip/trips-reducer';
import alertsReducer from '../Alert/alerts-reducer';
import moderationsReducer from '../Moderations/moderations-reducer';
import followsReducer from '../Follows/follows-reducer';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['nps', 'parks', 'reviews', 'anonUser', 'trips', 'alerts', 'moderations', 'follows'],
    whitelist: ['users']
}
const reducers = combineReducers({
    users: usersReducer,
    nps: npsReducer,
    parks: parksReducer,
    reviews: reviewsReducer,
    anonUser: anonUserReducer,
    trips: tripsReducer,
    alerts: alertsReducer,
    follows: followsReducer,
    moderations: moderationsReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})