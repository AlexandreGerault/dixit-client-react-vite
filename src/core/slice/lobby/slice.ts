import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useCases } from "./use_cases";
import { Lobby } from "./entities/lobby";

export const lobbyAdapter = createEntityAdapter<Lobby>();

export const lobbyInitialState = lobbyAdapter.getInitialState();

const lobbySlice = createSlice({
  name: "lobby",
  initialState: lobbyInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(useCases.createLobby.fulfilled, (state, action) => {
      lobbyAdapter.removeAll(state);
      lobbyAdapter.setOne(state, action.payload);
    });
  },
});

export { lobbySlice };
