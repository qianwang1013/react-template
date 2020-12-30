import React, { useState } from "react";
import {
  DraftHandleValue,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from "draft-js";
import { makeCommands, Command } from "./commands";
import "./styles.scss";
import EditorItem from "./EditorItem";
import { convertCompilerOptionsFromJson } from "typescript";
import { Console } from "console";

export default function RichEditor() {
  const [state, setState] = useState<EditorState>(EditorState.createEmpty());
  const editor = React.useRef(null);

  const _onBoldClick = () => {
    setState(RichUtils.toggleInlineStyle(state, "BOLD"));
  };

  const _onCodeClick = () => {
    setState(RichUtils.toggleInlineStyle(state, "CODE"));
  };

  const _onStrikeThrough = () => {
    setState(RichUtils.toggleInlineStyle(state, "STRIKETHROUGH"));
  };

  const _onTitleClick = () => {
    setState(RichUtils.toggleInlineStyle(state, "TITLE"));
  };

  const customCommands = makeCommands([Command.TITLE]);
  return (
    <div className="rich-editor">
      <div className="rich-editor__short-cuts">
        <EditorItem text="B" onClick={_onBoldClick} />
        <EditorItem text="C" onClick={_onCodeClick} />
        <EditorItem text="_" onClick={_onStrikeThrough} />
        <EditorItem text="H" onClick={_onTitleClick} />
      </div>
      <Editor
        ref={editor}
        customStyleMap={customCommands.reduce(function (command, obj) {
          Object.assign(command, obj.styles);
          return command;
        }, {})}
        editorState={state}
        onChange={setState}
        keyBindingFn={(event) => {
          if (event.ctrlKey && event.key === "h") {
            return "title";
          }
          return getDefaultKeyBinding(event);
        }}
        handleKeyCommand={(command, state) => {
          let res: DraftHandleValue = "not-handled";
          let newState: EditorState | null = RichUtils.handleKeyCommand(
            state,
            command
          );
          customCommands.forEach((customCommand) => {
            const customState = customCommand.handle(command as Command, state);
            if (!!customState) {
              newState = customState;
            }
          });

          if (!!newState) {
            res = "handled";
            setState(newState);
          }

          console.log(newState, res);
          return res;
        }}
        placeholder="..."
      />
    </div>
  );
}
