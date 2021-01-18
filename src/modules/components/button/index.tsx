import * as React from "react";
import "./styles.scss";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <button {...props} />;
};

export default Button;
