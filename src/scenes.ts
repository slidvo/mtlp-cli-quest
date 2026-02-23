import type { SceneFn } from "./types.js";
import { SceneTitle } from "./enums/indext.js";
import { state } from "./State.js";
import { rl } from "./utils/input.js";

const { LEFT, RIGHT, END } = SceneTitle;

export async function sceneStart() {
  const answer = Number(
    await rl.question("Ты стоишь у двери. Идти \n1.налево\n2.направо?\n>"),
  );
  switch (answer) {
    case 1:
      state.sceneTitle = LEFT;
      break;
    case 2:
      state.sceneTitle = RIGHT;
      break;
    default:
      console.log("Вас похитили инопланетяне. Игра окончена");
      state.sceneTitle = END;
      state.health = 1;
      state.money = 0;
  }
}

export async function sceneLeft() {
  console.log(`Ты пошёл налево. Нашёл монету. Деньги: 10
            `);
  state.money += 10;
  const answer = Number(await rl.question(`Идти\n1.дальше\n2.вернуться\n> `));
  switch (answer) {
    case 1:
      state.sceneTitle = END;
      state.health = 0;
      break;
    case 2:
      state.sceneTitle = END;
      state.health -= 50;
      break;
  }
}
export async function sceneRight() {
  state.sceneTitle = END;
  state.health -= 50;
}

export const scenesMap = new Map<SceneTitle, SceneFn>([
  [SceneTitle.START, sceneStart],
  [SceneTitle.LEFT, sceneLeft],
  [SceneTitle.RIGHT, sceneRight],
]);
