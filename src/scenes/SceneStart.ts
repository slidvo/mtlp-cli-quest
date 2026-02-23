import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneStart: Scene = {
  id: SceneTitle.START,
  text: "Ты стоишь у двери\n>",
  effect: (_state) => {},
  choices: [
    {
      label: "Идти налево",
      next: SceneTitle.LEFT,
    },
    {
      label: "Идти на право",
      next: SceneTitle.RIGHT,
    },
  ],
};
