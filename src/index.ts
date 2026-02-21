import readline from "node:readline/promises";
import { state } from "./State.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function runGame() {
  let answer: number = 0;
  while (true) {
    if (state.scenario === "start") {
      answer = Number(
        await rl.question("Ты стоишь у двери. Идти \n1.налево\n2.направо?\n>"),
      );

      switch (true) {
        case answer === 1:
          state.scenario = "left";
          break;
        case answer === 2:
          state.scenario = "right";
          break;
        default:
          console.log("Вас похити инопланетяне. Игра окончена");
          break;
      }
    }

    switch (state.scenario) {
      case "left":
        console.log(`Ты пошёл налево. Нашёл монету. Деньги: 10
            `);
        state.money += 10;
        answer = Number(
          await rl.question(`Идти 
1.дальше
2.вернуться
>`),
        );
        state.scenario = "end";
        state.health = 0;
        break;
      case "right":
        state.scenario = "end";
        state.health -= 50;
        break;
    }

    if (state.scenario === "end") {
      console.log(`Вас похити инопланетяне. Игра окончена`);
      state.health = 0;
      break;
    }
  }

  let { money, health } = state;
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
      console.log("Вас похитили инопланетяне. Игра окончена")
      state.scenario="end"
      state.health=1
      state.money=0
  }
}

async function sceneLeft(){

}

async function sceneRight(){

}



runGame();
