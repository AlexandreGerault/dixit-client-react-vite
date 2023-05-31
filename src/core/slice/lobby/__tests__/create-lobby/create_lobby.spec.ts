import { describe, it, expect } from "vitest";
import { createLobbySUT } from "./sut-builder";

describe("Create Lobby", () => {
  it("has a default null lobby", async () => {
    const {getLobby} = createLobbySUT().build();

    expect(getLobby()).toBeNull();
  });

  it("can create a lobby", async () => {
    const {createLobby, getLobby, getPlayers} = createLobbySUT().build();

    await createLobby("lobby-name", "Gunnolfson");

    expect(getLobby()).toEqual({
      name: "lobby-name",
    });
    expect(getPlayers()).toHaveLength(1);
  });

  it("cannot create a lobby which already exists", async () => {
    const {createLobby, getLastError} = createLobbySUT()
      .withLobby({name: "lobby-name"})
      .build();
    
    await createLobby("lobby-name", "Gunnolfson");

    expect(getLastError()).toEqual("Lobby already exists");
  });
});
