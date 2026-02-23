import { state } from "./State.js";
import { scenesMap } from "./scenes.js";
import { SceneTitle } from "./enums/SceneTitle.js";
import { rl } from "./utils/input.js";

async function runGame() {
  let scene = scenesMap.get(SceneTitle.START);
  while (scene) {
    await scene.effect(state);
    console.log(scene.text);
    if (scene.choices.length === 0) {
      scene = undefined;
      break;
    }

    scene.choices.forEach((c, index) =>
      console.log(`${index + 1}.${c.label}\n`),
    );

    const answer = Number(await rl.question(">"));
    let choice = scene.choices[answer - 1];

    if (!choice) break;

    scene = scenesMap.get(choice.next);
  }
  const { money, health } = state;
  console.log(`Игра окончена. Деньги: ${money} Здоровье: ${health}`);
  rl.close();
}

runGame();
