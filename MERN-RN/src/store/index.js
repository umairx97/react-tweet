import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "../reducers"; 

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';



const persistConfig = { 
    key: 'root', 
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)


export const store =  createStore(persistedReducer, {}, applyMiddleware(ReduxThunk))
export const persistor = persistStore(store)

// export default createStore(reducers, {}, applyMiddleware(ReduxThunk));