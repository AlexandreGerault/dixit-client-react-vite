import { describe, it, expect } from "vitest";
import { createStore } from "~/core";
import { selectors } from "~/core/slice/lobby";
import { useCases } from "~/core/slice/lobby/use_cases";

describe("Create Lobby", () => {
  it("has a default null lobby", () => {
    const store = createStore();

    expect(selectors.getLobby(store.getState())).toBeNull();
  });

  it("can create a lobby", () => {
    const store = createStore();

    store.dispatch(
      useCases.createLobby({
        name: "lobby-name",
      })
    );

    expect(selectors.getLobby(store.getState())).toEqual({
      name: "lobby-name",
    });
  });
});
