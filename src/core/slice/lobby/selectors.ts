import { RootState } from "~/core";

const selectors = {
  getLobby(state: RootState) {
    return state.lobby.lobby;
  },
  getLastError(state: RootState) {
    return state.lobby.error;
  },
  getPlayers(state: RootState) {
    return state.lobby.players;
  }
};

export { selectors };
