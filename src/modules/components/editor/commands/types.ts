import { EditorState, DraftHandleValue } from "draft-js";

export enum Command {
  TITLE = "title",
}

export interface CustomCommand {
  styles: { [styleName: string]: React.CSSProperties };
  handle: (command: Command, state: EditorState) => EditorState | null;
}
