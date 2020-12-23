import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import styles from "./App.module.css";
import PasswordAnswer from "./PasswordAnswer";

import NiceTry from "./Nice Try.jpg";
import Answer from "./Answer.jpg";
import Puzzle2Solution from "./Puzzle 2 Solution.jpg";

function App() {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Switch>
          <Route path="/answer-1">
            <PasswordAnswer
              imgSrc={NiceTry}
              correctAnswer="600"
              hint="It's a 3 digit number."
            />
          </Route>
          <Route path="/answer-2">
            <PasswordAnswer
              imgSrc={NiceTry}
              correctAnswer="877"
              hint="It's a 3 digit number."
            />
          </Route>
          <Route path="/answer-3">
            <PasswordAnswer
              imgSrc={Answer}
              correctAnswer="936"
              hint="It's a 3 digit number."
            />
          </Route>
          <Route path="/puzzle-2-solution">
            <PasswordAnswer
              imgSrc={Puzzle2Solution}
              correctAnswer="79609923"
              hint="It's a 8 digit number."
            />
          </Route>
          <Route path="/">
            <h1>Welcome to Gather Town Escape Room!</h1>

            <p>Here's a chicken for you 🐓</p>

            <p>But sorry you are in the wrong place.</p>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
