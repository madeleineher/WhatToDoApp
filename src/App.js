import React, { Fragment } from "react";
import "./App.css";

import Todos from "./components/todo/Todos";
import NavBar from "./components/layout/NavBar";
import TodoState from "./context/todo/TodoState";

const App = () => {
  return (
    <TodoState>
      <Fragment>
        <NavBar />
        <div className='container'>
          <Todos />
        </div>
      </Fragment>
    </TodoState>
  );
};

export default App;
