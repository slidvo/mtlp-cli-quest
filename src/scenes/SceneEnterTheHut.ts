import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";

export const sceneEnterTheHut: Scene = {
  id: SceneTitle.ENTER_THE_HUT,
  text: `Вы стучите в дверь, и через мгновение её открывает пожилая женщина с добрым взглядом.
Она предлагает вам войти и отдохнуть. Вы чувствуете себя в безопасности и продолжаете путь с новыми силами.`,
  choices: [],
  next: SceneTitle.END,
};
