import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneRight: Scene = {
  id: SceneTitle.RIGHT,
  text: "Ты пошёл направо и упал в яму.",
  effect: (state) => {
    state.health -= 50;
  },
  choices: [],
};
