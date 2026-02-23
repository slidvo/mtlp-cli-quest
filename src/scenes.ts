import { SceneTitle } from "./enums/indext.js";
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
