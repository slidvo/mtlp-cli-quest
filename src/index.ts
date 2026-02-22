import { rl } from "./input.js";
import { state } from "./State.js";
import { sceneStart, sceneLeft, sceneRight } from "./scenes.js";

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

runGame();
