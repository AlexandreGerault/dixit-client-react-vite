import { describe, it, expect } from "vitest";
import { createStore } from "~/core";
import { selectors } from "~/core/slice/lobby";
import { useCases } from "~/core/slice/lobby/use_cases";
import { InMemoryLobbyService } from "~/core/slice/lobby/adapters/in-memory-lobby-service";

describe("Create Lobby", () => {
  it("has a default null lobby", async () => {
    const store = createStore({lobbyService: new InMemoryLobbyService()});

    expect(selectors.getLobby(store.getState())).toBeNull();
  });

  it("can create a lobby", async () => {
    const store = createStore({lobbyService: new InMemoryLobbyService()});

    await store.dispatch(
      useCases.createLobby({
        name: "lobby-name",
      })
    );

    expect(selectors.getLobby(store.getState())).toEqual({
      name: "lobby-name",
    });
  });
});
