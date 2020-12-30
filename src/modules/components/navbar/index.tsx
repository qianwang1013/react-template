import * as React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "../auth/FacebookLogin";
import "./styles.scss";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/article">Article</Link>
      </div>
      <div>
        <FacebookLogin />
      </div>
    </nav>
  );
};
