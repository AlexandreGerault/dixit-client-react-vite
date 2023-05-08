import { Lobby } from "../entities/lobby";
import { LobbyService } from "./lobby-service";

export class InMemoryLobbyService implements LobbyService {
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