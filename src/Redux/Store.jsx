import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

// import list of multinle Slice files
import UserRaducer from "./Slice/UserSlice";


// list of multible sliceraducers
export const rootReducer = combineReducers({
      user:UserRaducer,
});


const persistConfig = {
  key: "root",
  storage,
  version: 1,
};


const persistReducer = persistStore(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store)
