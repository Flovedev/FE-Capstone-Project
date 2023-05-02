import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer";
import genresReducer from "../reducers/genresReducer";
import platformsReducer from "../reducers/platformsReducer";
import searchReducer from "../reducers/searchReducer";
import gameReducer from "../reducers/gameReducer";
import genreInfoReducer from "../reducers/genreInfoReducer";
import discoverReducer from "../reducers/discoverReducer";
import platformInfoReducer from "../reducers/platformInfoReducer";

const persistConfig = {
  storage: Storage,
  key: "root",
};

const combinedReducer = combineReducers({
  users: userReducer,
  genres: genresReducer,
  platforms: platformsReducer,
  search: searchReducer,
  game: gameReducer,
  genreGames: genreInfoReducer,
  platformGames: platformInfoReducer,
  discover: discoverReducer,
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
