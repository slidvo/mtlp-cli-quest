import readline from "node:readline/promises";
import { state } from "./State.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function runGame() {
  while (state.scenario !== "end") {
    switch (state.scenario) {
      case "start":
        await sceneStart();
        break;
      case "left":
        await sceneLeft();
        break;
      case "right":
        await sceneRight();
        break;
    }
  }

  const { money, health } = state;
  console.log(`Ваш статус на конец игры money=${money} health=${health} `);
  rl.close();
}

async function sceneStart() {
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

async function sceneLeft() {
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
async function sceneRight() {
  state.scenario = "end";
  state.health -= 50;
}

runGame();
