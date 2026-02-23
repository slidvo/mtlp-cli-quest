import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneEnd: Scene = {
  id: SceneTitle.END,
  text: "Игра окончена.",
  effect: (_state) => {
    console.log("Игра окончена.");
  },
  choices: [],
};
