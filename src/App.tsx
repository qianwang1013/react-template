import React from "react";
import "./App.css";
import Card from "./modules/components/card";
import FacebookLogin from "./modules/components/auth";
import RichEditor from "./modules/components/editor";
import { Provider } from "react-redux";
import { store } from "./modules/stores";
import { login } from "./modules/stores/user/actions";
import AppRouter from "./modules/routes";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Sample {}

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
