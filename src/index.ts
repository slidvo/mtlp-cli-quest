import { state } from "./State.js";
import { scenesMap } from "./scenes/index.js";
import { SceneTitle } from "./enums/SceneTitle.js";
import { rl } from "./utils/input.js";
import { printChoices } from "./utils/output.js";

async function runGame() {
  let scene = scenesMap.get(SceneTitle.START);
  while (scene) {
    console.log(scene.text);

    if (scene.effect) await scene.effect(state);

    if (scene.choices.length === 0 && !scene.next) {
      scene = undefined;
      break;
    }

    if (scene.next) {
      scene = scenesMap.get(scene.next);
      continue;
    }

    printChoices(scene.choices);

    const answer = Number(await rl.question(">"));

    let choice = scene.choices[answer - 1];

    // console.log(`DEBUG: ${JSON.stringify(choice)}`);

    if (!choice) {
      console.log("Вы ничего не выбрали. Попробуйте выбрать один из вариантов.");
      continue;
    }

    scene = scenesMap.get(choice.next);
    // console.log(`DEBUG: new scene ${JSON.stringify(scene)}`);
  }
  const { money, health } = state;
  console.log(`Игра окончена. Деньги: ${money} Здоровье: ${health}`);
  rl.close();
}

runGame();
