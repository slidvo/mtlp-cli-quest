import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneEnterTheHutBadFinal: Scene = {
  id: SceneTitle.ENTER_THE_HUT_BAD_FINAL,
  text: `Вы решаете войти в хижину, но как только переступаете порог, дверь захлопывается за вашей спиной.
Внутри пусто, только звук капающей воды раздается в тишине. Кажется, что вы попали в ловушку.`,
  choices: [],
  next: SceneTitle.END,
};
