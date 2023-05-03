import { RootState } from "~/core";

const selectors = {
  getLobby(state: RootState) {
    return state.lobby;
  },
};

export { selectors };
