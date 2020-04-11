import React, { Fragment } from "react";
import "./App.css";
import "../node_modules/pretty-checkbox/dist/pretty-checkbox.css";

import Todos from "./components/todo/Todos";
import NavBar from "./components/layout/NavBar";
import TodoState from "./context/todo/TodoState";
import Alert from "./components/layout/Alert";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <TodoState>
      <AlertState>
        <Fragment>
          <NavBar />
          <Alert />
          <Todos />
        </Fragment>
      </AlertState>
    </TodoState>
  );
};

export default App;
