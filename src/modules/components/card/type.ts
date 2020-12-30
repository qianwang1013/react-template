import { ReactElement } from "react";

export interface CardProps<T> {
  data?: T[];
  getName?: (data: T) => ReactElement;
}
