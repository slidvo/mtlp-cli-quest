import { SceneTitle } from "./enums/indext.js";
export default interface State {
  sceneTitle: SceneTitle;
  money: number;
  health: number;
}

export const state: State = {
  sceneTitle: SceneTitle.START,
  money: 0,
  health: 100,
};
