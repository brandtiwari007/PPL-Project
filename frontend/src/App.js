import React from "react";
// import axios from 'axios';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from "./components/register";
import Login from "./components/login";
import Timeline from "./components/timeline";
import addCategories from "./components/addCategory";
import addCategory from "./components/addCategory";
import singlePost from "./components/singlepost";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false
    };
  }

  render() {
    return (
      // <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Register} />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/addCategory" component={addCategory} />
        <Route path="/singlepost" component={singlePost} />
      </Switch>
      //  </BrowserRouter>
    );
  }
}

export default App;
