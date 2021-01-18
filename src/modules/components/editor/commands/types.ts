import { EditorState } from "draft-js";
import * as React from 'react';

export enum Command {
  TITLE = "title",
}

export interface CustomCommand {
  type: Command;
  rule: (event: React.KeyboardEvent) => boolean;
  styles: { [styleName: string]: React.CSSProperties };
  handle: (command: Command, state: EditorState) => EditorState | null;
}
