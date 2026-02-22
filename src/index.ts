import { rl } from "./utils/input.js";
import { state } from "./State.js";
import { scenesMap } from "./scenes.js";

async function runGame() {
  while (state.scenario !== "end") {
    const scene = scenesMap.get(state.scenario);
    if (scene) {
      await scene();
    } else {
      console.log(`Сцена ${state.scenario} не найдена`);
      break;
    }
  }

  const { money, health } = state;
  console.log(`Ваш статус на конец игры money=${money} health=${health} `);
  rl.close();
}

runGame();
