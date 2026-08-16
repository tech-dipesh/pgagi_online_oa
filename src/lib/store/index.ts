import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import preferencesReducer from "./preferencesSlice"
import favoritesReducer from "./favoritesSlice"
import feedReducer from "./feedSlice"

const rootReducer = combineReducers({
  preferences: preferencesReducer,
  favorites: favoritesReducer,
  feed: feedReducer,
})

const persistConfig = {
  key: "content-dashboard",
  storage,
  whitelist: ["preferences", "favorites"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

export const store = makeStore()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
