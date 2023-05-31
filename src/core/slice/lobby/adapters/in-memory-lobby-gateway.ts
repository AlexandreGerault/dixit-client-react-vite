import { Lobby } from '../entities/lobby';
import { LobbyGateway } from './lobby-gateway';

export class InMemoryLobbyGateway implements LobbyGateway {
  lobbies: Lobby[];

  constructor(lobbies: Lobby[] = []) {
    this.lobbies = lobbies;
  }

  async createLobby(name: string) {
    if (this.lobbies.find((lobby) => lobby.name === name)) {
      throw new Error('Lobby already exists');
    }

    const lobby = { name };

    this.lobbies.push(lobby);

    return lobby;
  }
}
