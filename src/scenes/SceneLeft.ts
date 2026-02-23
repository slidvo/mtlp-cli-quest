import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneLeft: Scene = {
  id: SceneTitle.LEFT,
  text: "Ты пошел налево и нашёл 10 золотых монет.\n>",
  effect: (state) => {
    state.money += 10;
  },
  choices: [
    {
      label: "Идти прямо.",
      next: SceneTitle.FORWARD,
    },
    {
      label: "Вернуться назазд.",
      next: SceneTitle.START,
    },
  ],
};
