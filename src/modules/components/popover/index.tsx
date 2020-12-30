import * as React from "react";
import "./styles.scss";

interface PopoverProps {
  renderFn: () => React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ children, renderFn }) => {
  return (
    <div className="popover__wrapper">
      {children}
      <div className="popover__content">123123{renderFn()}</div>
    </div>
  );
};

export default Popover;
