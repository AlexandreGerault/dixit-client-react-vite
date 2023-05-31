import { createAsyncThunk } from "@reduxjs/toolkit";
import { LobbyGateway } from "./adapters/lobby-gateway";
import { Lobby } from "./entities";

interface CreateLobbyResult {
  lobby: Lobby;
  username: string;
}

const useCases = {
  createLobby: createAsyncThunk<CreateLobbyResult, {name: string, username: string}, {extra: {lobbyService: LobbyGateway}}>('lobby/create', async (payload, {extra}) => {
    return {
      lobby: await extra.lobbyService.createLobby(payload.name),
      username: payload.username,
    };
  })
};

export { useCases };
