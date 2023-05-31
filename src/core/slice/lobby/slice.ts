import { createSlice } from "@reduxjs/toolkit";
import { useCases } from "./use_cases";
import { Lobby } from "./entities";
import { Player } from "./entities";

interface LobbyState {
  lobby: Lobby | null;
  error?: string;
  players: Player[];
}

const lobbySlice = createSlice({
  name: "lobby",
  initialState: {lobby: null, players: []} as LobbyState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(useCases.createLobby.fulfilled, (state, action) => {
      state.lobby = action.payload.lobby;
      state.players = [{username: action.payload.username}];
    });
    builder.addCase(useCases.createLobby.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export { lobbySlice };
