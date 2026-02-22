export type Scenario = "start" | "left" | "right" | "back" | "forward" | "up" | "end";
export type SceneFn = () => Promise<void>;