import { state } from "./State.js";
import { rl } from "./input.js";

export async function sceneStart() {
  const answer = Number(
    await rl.question("Ты стоишь у двери. Идти \n1.налево\n2.направо?\n>"),
  );
  switch (answer) {
    case 1:
      state.scenario = "left";
      break;
    case 2:
      state.scenario = "right";
      break;
    default:
      console.log("Вас похитили инопланетяне. Игра окончена");
      state.scenario = "end";
      state.health = 1;
      state.money = 0;
  }
}

export async function sceneLeft() {
  console.log(`Ты пошёл налево. Нашёл монету. Деньги: 10
            `);
  state.money += 10;
  const answer = Number(await rl.question(`Идти\n1.дальше\n2.вернуться> `));
  switch (answer) {
    case 1:
      state.scenario = "end";
      state.health = 0;
      break;
    case 2:
      state.scenario = "end";
      state.health -= 50;
      break;
  }
}
export async function sceneRight() {
  state.scenario = "end";
  state.health -= 50;
}
