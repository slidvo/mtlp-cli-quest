import type { SceneTitle } from "../enums/SceneTitle.js";

export interface Choice {
  label: string;
  next: SceneTitle;
}
