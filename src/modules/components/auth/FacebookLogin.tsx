import React from "react";
import FacebookLogin from ".";

export default function FacebookLoginWrapper() {
  return <FacebookLogin appId="560620797642927" scopes="name,email,picture" />;
}
