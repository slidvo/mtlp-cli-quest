import { state } from "./State.js";
import { scenesMap } from "./scenes/index.js";
import { SceneTitle } from "./enums/SceneTitle.js";
import { rl } from "./utils/input.js";
import { printChoices } from "./utils/output.js";

async function runGame() {
  let scene = scenesMap.get(SceneTitle.START);
  while (scene) {
    await scene.effect(state);
    console.log(scene.text);
    if (scene.choices.length === 0) {
      scene = undefined;
      break;
    }

    printChoices(scene.choices);

    const answer = Number(await rl.question(">"));
    let choice = scene.choices[answer - 1];

    if (!choice) {
      console.log("Вы ничего не выбрали. Попробуйте выбрать один из вариантов.");
      continue;
    }

    scene = scenesMap.get(choice.next);
  }
  const { money, health } = state;
  console.log(`Игра окончена. Деньги: ${money} Здоровье: ${health}`);
  rl.close();
}

runGame();
