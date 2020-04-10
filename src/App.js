import React, { Fragment } from "react";
import "./App.css";
import "../node_modules/pretty-checkbox/dist/pretty-checkbox.css";

import Todos from "./components/todo/Todos";
import NavBar from "./components/layout/NavBar";
import TodoState from "./context/todo/TodoState";

const App = () => {
  return (
    <TodoState>
      <Fragment>
        <NavBar />
        <Todos />
      </Fragment>
    </TodoState>
  );
};

export default App;
