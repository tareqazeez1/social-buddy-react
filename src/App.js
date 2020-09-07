import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';



function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>

          <Route exact path="/">
            <Posts></Posts>
          </Route>

          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </div>




  );
}

export default App;
