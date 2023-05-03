import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { lobbySlice } from "./slice/lobby/slice";

const rootReducer = combineReducers({
  [lobbySlice.name]: lobbySlice.reducer,
});

function createStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export { createStore };
