import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";

const persistConfig = {
    key : "root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducers)

export let store = createStore(
    persistedReducer,
    applyMiddleware(thunk,logger)
)

export let persistor = persistStore(store)