import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer";
import genresReducer from "../reducers/genresReducer";
import platformsReducer from "../reducers/platformsReducer";

const persistConfig = {
  storage: Storage,
  key: "root",
};

const combinedReducer = combineReducers({
  users: userReducer,
  genres: genresReducer,
  platforms: platformsReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      // immutableCheck: false,
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistedStore };
