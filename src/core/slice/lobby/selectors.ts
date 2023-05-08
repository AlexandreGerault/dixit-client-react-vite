import { RootState } from "~/core";
import { lobbyAdapter } from "./slice";

const selectors = {
  getLobby(state: RootState) {
    return lobbyAdapter.getSelectors().selectAll(state.lobby)[0] ?? null;
  },
};

export { selectors };
