import type { SceneTitle } from "../enums/SceneTitle.js";
import type State from "../State.js";
import type { Choice } from "./Choice.js";

export interface Scene {
  id: SceneTitle;
  text: string;
  effect: (state: State) => void;
  choices: Array<Choice>;
}
