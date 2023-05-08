import { Lobby } from "../entities/lobby";
import { LobbyGateway } from "./lobby-service";

export class InMemoryLobbyService implements LobbyGateway {
    lobbies: Lobby[];

    constructor() {
        this.lobbies = [];
    }

    createLobby(name: string) {
        const lobby = { name };
        this.lobbies.push(lobby);
        return Promise.resolve(lobby);
    }
}