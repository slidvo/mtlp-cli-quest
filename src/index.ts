import { state } from "./State.js";
import { scenesMap } from "./scenes.js";
import { SceneTitle } from "./enums/SceneTitle.js";

async function runGame() {
  while (state.sceneTitle !== SceneTitle.END) {
    const scene = scenesMap.get(state.sceneTitle);
    if (scene) {
      await scene();
    } else {
      console.log(`Сцена ${state.sceneTitle} не найдена`);
      break;
    }
  }

  scenesMap.get(SceneTitle.END)?.();
}

runGame();
