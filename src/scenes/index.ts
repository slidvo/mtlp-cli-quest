import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";
import { sceneEnd } from "./SceneEnd.js";
import { sceneForward } from "./SceneForward.js";
import { sceneLeft } from "./SceneLeft.js";
import { sceneRight } from "./SceneRight.js";
import { sceneStart } from "./SceneStart.js";

const { START, LEFT, RIGHT, FORWARD, END } = SceneTitle;

export const scenesMap: Map<SceneTitle, Scene> = new Map([
  [START, sceneStart],
  [FORWARD, sceneForward],
  [LEFT, sceneLeft],
  [RIGHT, sceneRight],
  [END, sceneEnd],
]);
