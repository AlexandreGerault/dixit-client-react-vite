import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { lobbySlice } from "./slice/lobby/slice";
import { LobbyGateway } from "./slice/lobby/adapters";

const rootReducer = combineReducers({
  [lobbySlice.name]: lobbySlice.reducer,
});

function createStore({lobbyService}: {lobbyService: LobbyGateway}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
          extraArgument: {
            lobbyService,
          }
        }
      })
  });

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export { createStore };
