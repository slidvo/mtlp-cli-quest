import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneStart: Scene = {
  id: SceneTitle.START,
  text: `Вы просыпаетесь в центре густого леса, окруженного туманом.
Единственный звук, который вы слышите, — это ветер, шелестящий в листве деревьев.
Перед вами две тропинки. Одна ведет направо, другая — налево.`,
  effect: (_state) => {},
  choices: [
    {
      label: "Направо",
      next: SceneTitle.RIGHT,
    },
    {
      label: "Налево",
      next: SceneTitle.LEFT,
    },
  ],
};
