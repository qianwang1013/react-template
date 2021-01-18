import {
  DraftHandleValue,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
  convertToRaw,
  RawDraftContentState,
} from "draft-js";
import React, { useState } from "react";
import { Command, makeCommands } from "./commands";
import EditorItem from "./EditorItem";
import Button from "../button";
import "./styles.scss";

interface RichEditorProps {
  onSave: (article: RawDraftContentState) => void;
}

export default function RichEditor(props: RichEditorProps) {
  const [state, setState] = useState<EditorState>(EditorState.createEmpty());
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { onSave } = props;
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
      <div className="rich-editor__btns">
        {isEdit ? (
          <>
            <Button
              onClick={() => {
                onSave(convertToRaw(state.getCurrentContent()));
                setIsEdit(false);
              }}
            >
              Save
            </Button>
            <Button onClick={() => setIsEdit(false)}>Cancel</Button>
          </>
        ) : (
          <Button onClick={() => setIsEdit(true)}>Edit</Button>
        )}
      </div>
      <div className="rich-editor__short-cuts">
        <EditorItem text="B" onClick={_onBoldClick} />
        <EditorItem text="C" onClick={_onCodeClick} />
        <EditorItem text="_" onClick={_onStrikeThrough} />
        <EditorItem text="H" onClick={_onTitleClick} />
      </div>
      <Editor
        ref={editor}
        readOnly={!isEdit}
        customStyleMap={customCommands.reduce((command, obj) => {
          Object.assign(command, obj.styles);
          return command;
        }, {})}
        editorState={state}
        onChange={setState}
        keyBindingFn={(event) => {
          let keyBinding: string | null = getDefaultKeyBinding(event);

          customCommands.some((command) => {
            const isCommandMatch = command.rule(event as React.KeyboardEvent);
            if (isCommandMatch) {
              keyBinding = command.type;
            }
            return isCommandMatch;
          });

          return keyBinding;
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

          return res;
        }}
        placeholder="..."
      />
    </div>
  );
}
