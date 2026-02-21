import type { Scenario } from "./types.js";
export default class State {
  scenario: Scenario = "start";
  money: number = 0;
  health: number = 100;
}
