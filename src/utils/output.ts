import type { Choice } from "../model/Choice.js";

export function printChoices(choices: Array<Choice>): void {
  choices.forEach((c, index) => console.log(`${index + 1}. ${c.label}\n`));
}
