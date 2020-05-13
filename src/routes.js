import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./pages/Navbar"
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./pages/Exercise";
import CreateUser from "./pages/User";

export default function Routes() {
  return (
<BrowserRouter>
<Navbar />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/exercises" component={Exercises} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
  </Switch>
</BrowserRouter>
  );
}


