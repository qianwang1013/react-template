import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./modules/routes";
import { store } from "./modules/stores";

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
