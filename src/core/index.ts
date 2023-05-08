import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { lobbySlice } from "./slice/lobby/slice";
import { InMemoryLobbyService } from "./slice/lobby/adapters/in-memory-lobby-service";

const rootReducer = combineReducers({
  [lobbySlice.name]: lobbySlice.reducer,
});

function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
          extraArgument: {
            lobbyService: new InMemoryLobbyService(),
          }
        }
      })
  });

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export { createStore };
