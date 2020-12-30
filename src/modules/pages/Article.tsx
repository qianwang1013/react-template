import * as React from "react";
import { Sample } from "../../App";
import Card from "../components/card";
import RichEditor from "../components/editor";

export default function Ariticle() {
  return (
    <Card<Sample>>
      <RichEditor />
    </Card>
  );
}
