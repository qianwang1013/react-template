import * as React from "react";
import { CardProps } from "./type";
import "./styles.scss";

const Card = <ObjectType,>(props: React.Props<CardProps<ObjectType>>) => {
  //   const { data } = props;

  return <div className="card">{props.children}</div>;
};

export default Card;
