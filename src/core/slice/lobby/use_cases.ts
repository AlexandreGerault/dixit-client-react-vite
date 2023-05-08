import { createAsyncThunk } from "@reduxjs/toolkit";
import { LobbyGateway } from "./adapters/lobby-service";
import { Lobby } from "./entities/lobby";

const useCases = {
  createLobby: createAsyncThunk<Lobby, {name: string}, {extra: {lobbyService: LobbyGateway}}>('lobby/create', async (payload, {extra}) => {
    return extra.lobbyService.createLobby(payload.name);
  })
};

export { useCases };
