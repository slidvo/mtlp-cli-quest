import { SceneTitle } from "./enums/indext.js";
import { rl } from "./utils/input.js";
import type State from "./State.js";

const { START, LEFT, RIGHT, FORWARD, END } = SceneTitle;

interface Scene {
  id: SceneTitle;
  text: string;
  effect: (state: State) => void;
  choices: Array<Choice>;
}

interface Choice {
  label: string;
  next: SceneTitle;
}

const sceneStart: Scene = {
  id: START,
  text: "Ты стоишь у двери\n>",
  effect: (_state) => {},
  choices: [
    {
      label: "Идти налево",
      next: LEFT,
    },
    {
      label: "Идти на право",
      next: RIGHT,
    },
  ],
};
const sceneLeft: Scene = {
  id: LEFT,
  text: "Ты пошел налево и нашёл 10 золотых монет.\n>",
  effect: (state) => {
    state.money += 10;
  },
  choices: [
    {
      label: "Идти прямо.",
      next: FORWARD,
    },
    {
      label: "Вернуться назазд.",
      next: START,
    },
  ],
};
const sceneRight: Scene = {
  id: RIGHT,
  text: "Ты пошёл направо и упал в яму.",
  effect: (state) => {
    state.health -= 50;
  },
  choices: [],
};
const sceneForward: Scene = {
  id: FORWARD,
  text: "Ты пошел прямо и потерялся.",
  effect: (_state) => {},
  choices: [],
};
const sceneEnd: Scene = {
  id: END,
  text: "Игра окончена.",
  effect: (_state) => {
    console.log("Игра окончена.");
  },
  choices: [],
};

export const scenesMap = new Map<SceneTitle, Scene>([
  [START, sceneStart],
  [FORWARD, sceneForward],
  [LEFT, sceneLeft],
  [RIGHT, sceneRight],
  [END, sceneEnd],
]);

// export async function sceneStart() {
//   const answer = Number(
//     await rl.question("Ты стоишь у двери. Идти \n1.налево\n2.направо?\n>"),
//   );
//   switch (answer) {
//     case 1:
//       state.sceneTitle = LEFT;
//       break;
//     case 2:
//       state.sceneTitle = RIGHT;
//       break;
//     default:
//       console.log("Вас похитили инопланетяне. Игра окончена");
//       state.sceneTitle = END;
//       state.health = 1;
//       state.money = 0;
//   }
// }

// export async function sceneLeft() {
//   console.log(`Ты пошёл налево. Нашёл монету. Деньги: 10
//             `);
//   state.money += 10;
//   const answer = Number(await rl.question(`Идти\n1.дальше\n2.вернуться\n> `));
//   switch (answer) {
//     case 1:
//       state.sceneTitle = END;
//       state.health = 0;
//       break;
//     case 2:
//       state.sceneTitle = END;
//       state.health -= 50;
//       break;
//   }
// }
// export async function sceneRight() {
//   state.sceneTitle = END;
//   state.health -= 50;
// }
// export async function sceneEnd() {
//   const { money, health } = state;
//   console.log(`Ваш статус на конец игры money=${money} health=${health} `);
//   rl.close();
// }
