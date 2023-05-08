import { Lobby } from "~/core/slice/lobby/entities/lobby";

export interface LobbyService {
  createLobby(name: string): Promise<Lobby>;
}