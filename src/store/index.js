import {configureStore, combineReducers} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as reducers from './modules';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    timeout: 0,
};
  
const settingsPersistConfig = {
    key: 'settings',
    storage: AsyncStorage,
    timeout: 0,
};

const cardsPersistConfig = {
    key: 'cards',
    storage: AsyncStorage,
    timeout: 0,
};

const { settings, cards } = reducers
const rootReducer = combineReducers({
    ...reducers,
    settings: persistReducer(settingsPersistConfig, settings),
    cards: persistReducer(cardsPersistConfig, cards),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);