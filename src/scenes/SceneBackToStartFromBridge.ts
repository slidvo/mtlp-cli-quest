import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneBackToStartFromBridge: Scene = {
  id: SceneTitle.BACK_TO_START_FROM_BRIDGE,
  text: `Вы решаете не рисковать и возвращаетесь к развилке.`,
  choices: [],
  next: SceneTitle.START,
};
