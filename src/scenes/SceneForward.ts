import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneForward: Scene = {
  id: SceneTitle.FORWARD,
  text: "Ты пошел прямо и потерялся.",
  effect: (_state) => {},
  choices: [],
};
