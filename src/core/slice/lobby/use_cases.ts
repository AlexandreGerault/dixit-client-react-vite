import { createAction } from "@reduxjs/toolkit";

const useCases = {
  createLobby: createAction<{ name: string }>("lobby/create"),
};

export { useCases };
