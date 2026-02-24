import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneCrossTheBridge: Scene = {
  id: SceneTitle.CROSS_THE_BRIDGE,
  text: `Вы смело идёте по скрипящим доскам моста, но в середине пути слышите треск.
Мост обрушивается под вами, и вы падаете в холодную воду реки. Вы теряете сознание...`,
  effect: (state) => (state.health = 0),
  choices: [],
};
