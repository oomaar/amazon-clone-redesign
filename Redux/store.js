import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import darkSliceReducer from "./slices/darkSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import bookmarkReducer from "./slices/bookmarkSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    dark: darkSliceReducer,
    cart: cartReducer,
    // bookmark: bookmarkReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

store.dispatch(getTotals());

export let persistor = persistStore(store);