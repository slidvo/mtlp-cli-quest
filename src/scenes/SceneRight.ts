import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneRight: Scene = {
  id: SceneTitle.RIGHT,
  text: `Вы поворачиваете направо и идёте по узкой тропинке.
Через некоторое время перед вами появляется старый мост, ведущий через бурную реку.`,
  effect: (_state) => {},
  choices: [
    {
      label: "Перейти через мост",
      next: SceneTitle.CROSS_THE_BRIDGE,
    },
    {
      label: "Вернуться назад",
      next: SceneTitle.BACK_TO_START_FROM_BRIDGE,
    },
  ],
};
