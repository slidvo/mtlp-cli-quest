import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type Scenario = "start" | "left" | "right" | "back" | "forward" | "up" | "end";

class State {
  scenario: Scenario = "start";
}
const state = new State();

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
          return false;
      }
    }

    switch (state.scenario) {
      case "left":
        console.log(`Ты пошёл налево. Нашёл монету. Деньги: 10
            `);
        answer = Number(
          await rl.question(`Идти 
1.дальше
2.вернуться
>`),
        );
        state.scenario = "end";
        break;
      case "right":
        state.scenario = "end";
        break;
    }

    if (state.scenario === "end") {
      console.log(`Вас похити инопланетяне. Игра окончена`);
      return false;
    } else {
      console.log(`Игра окончена`);
      return false;
    }
  }
}

runGame();
