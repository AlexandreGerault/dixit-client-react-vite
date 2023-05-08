import { Lobby } from "~/core/slice/lobby/entities/lobby";

export interface LobbyGateway {
  createLobby(name: string): Promise<Lobby>;
}