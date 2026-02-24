import { SceneTitle } from "../enums/SceneTitle.js";
import type { Scene } from "../model/Scene.js";
import { sceneEnd } from "./SceneEnd.js";
import { sceneForward } from "./SceneForward.js";
import { sceneLeft } from "./SceneLeft.js";
import { sceneRight } from "./SceneRight.js";
import { sceneStart } from "./SceneStart.js";
import { sceneCrossTheBridge } from "./SceneCrossTheBridge.js";
import { sceneBackToStartFromBridge } from "../scenes/SceneBackToStartFromBridge.js";
import { sceneEnterTheHut } from "../scenes/SceneEnterTheHut.js";
import { sceneEnterTheHutBadFinal } from "../scenes/SceneEnterTheHutBadFinal.js";

export const scenesMap: Map<SceneTitle, Scene> = new Map([
  [SceneTitle.START, sceneStart],
  [SceneTitle.FORWARD, sceneForward],
  [SceneTitle.LEFT, sceneLeft],
  [SceneTitle.RIGHT, sceneRight],
  [SceneTitle.END, sceneEnd],
  [SceneTitle.CROSS_THE_BRIDGE, sceneCrossTheBridge],
  [SceneTitle.BACK_TO_START_FROM_BRIDGE, sceneBackToStartFromBridge],
  [SceneTitle.ENTER_THE_HUT, sceneEnterTheHut],
  [SceneTitle.ENTER_THE_HUT_BAD_FINAL, sceneEnterTheHutBadFinal],
]);
