import { TitleCommand } from "./TitleCommand";
import { Command, CustomCommand } from "./types";

export * from "./types";
export const makeCommands = (commands: Command[]) => {
  const customCommands: CustomCommand[] = [];
  commands.map((command) => {
    switch (command) {
      case Command.TITLE:
        customCommands.push(new TitleCommand());
        break;
      default:
        break;
    }
  });

  return customCommands;
};
