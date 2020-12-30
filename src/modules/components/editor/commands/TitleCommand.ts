import { EditorState, RichUtils } from "draft-js";
import { CustomCommand, Command } from "./types";

export class TitleCommand implements CustomCommand {
  styles = {
    TITLE: {
      marginTop: 10,
      marginBottom: 0,
      fontSize: "1.67em",
      lineHeight: 1.25,
      fontWeight: 600,
    },
  };

  handle = (command: Command, state: EditorState) => {
    console.log(command, Command.TITLE);
    if (command === Command.TITLE) {
      return RichUtils.toggleInlineStyle(state, "TITLE");
    } else {
      return null;
    }
  };
}
