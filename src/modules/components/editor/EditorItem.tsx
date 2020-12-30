import * as React from "react";
import classNames from "classnames";

interface EditorItemProps {
  text: string;
  onClick: () => void;
}

const EditorItem: React.FC<EditorItemProps> = (props) => {
  const { text, onClick } = props;
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <span
      onClick={() => {
        onClick();
        setIsActive(!isActive);
      }}
      className={classNames({
        "rich-editor__short-cuts__item": true,
        "rich-editor__short-cuts__item__active": isActive,
      })}
    >
      {text}
    </span>
  );
};

export default EditorItem;
