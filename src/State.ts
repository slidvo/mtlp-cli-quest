import type { Scenario } from "./types.js";
export default interface State {
  scenario: Scenario;
  money: number;
  health: number;
}

export const state: State = {
  scenario: "start",
  money: 0,
  health: 100,
};
