import { rl } from "./utils/input.js";
import { state } from "./State.js";
import { sceneStart, sceneLeft, sceneRight } from "./scenes.js";

type SceneFn = () => Promise<void>;

async function runGame() {
  const scenes = new Map<string, SceneFn>([
    ["start", sceneStart],
    ["left", sceneLeft],
    ["right", sceneRight],
  ]);

  while (state.scenario !== "end") {
    const scene = scenes.get(state.scenario);
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
