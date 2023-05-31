import { createStore } from "~/core";
import { selectors } from "~/core/slice/lobby";
import { LobbyGateway, InMemoryLobbyGateway } from "~/core/slice/lobby/adapters";
import { Lobby } from "~/core/slice/lobby/entities/lobby";
import { useCases } from "~/core/slice/lobby/use_cases";

interface CreateLobbySUTProps {
  lobbyGateway: LobbyGateway;
}

const defaultProps = {
  lobbyGateway: new InMemoryLobbyGateway(),
}

export function createLobbySUT(props: CreateLobbySUTProps = defaultProps) {
  return {
    withLobby(lobby: Lobby) {
      props = {...props, lobbyGateway: new InMemoryLobbyGateway([lobby])};

      return createLobbySUT(props);
    },
    build() {
      const store = createStore({lobbyService: props.lobbyGateway});

      const createLobby = async (lobbyName: string, username: string) => {
        await store.dispatch(
          await useCases.createLobby({
            name: lobbyName,
            username,
          })
        );
      };

      const getLobby = () => selectors.getLobby(store.getState());

      const getLastError = () => selectors.getLastError(store.getState());

      const getPlayers = () => selectors.getPlayers(store.getState());

      return {
        createLobby,
        getLobby,
        getLastError,
        getPlayers,
      };
    },
  };
}
