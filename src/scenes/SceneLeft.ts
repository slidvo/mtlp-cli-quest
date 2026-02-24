import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneLeft: Scene = {
  id: SceneTitle.LEFT,
  text: `Вы сворачиваете налево, и тропинка выводит вас к небольшой хижине.
Из окна виден тусклый свет, а дверь приоткрыта.`,
  choices: [
    {
      label: "Войти в хижину",
      next: SceneTitle.ENTER_THE_HUT_BAD_FINAL,
    },
    {
      label: "Постучать в дверь",
      next: SceneTitle.ENTER_THE_HUT,
    },
  ],
};
