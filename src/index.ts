import { rl } from "./utils/input.js";
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

  const { money, health } = state;
  console.log(`Ваш статус на конец игры money=${money} health=${health} `);
  rl.close();
}

runGame();
