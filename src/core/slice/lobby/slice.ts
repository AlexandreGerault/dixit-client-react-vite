import { createSlice } from "@reduxjs/toolkit";
import { useCases } from "./use_cases";

type LobbyState = null | { name: string };

const initialState: LobbyState = null;

const lobbySlice = createSlice({
  name: "lobby",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(useCases.createLobby, (state, action) => {
      return action.payload;
    });
  },
});

export { lobbySlice };
