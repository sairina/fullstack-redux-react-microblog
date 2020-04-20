import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import Post from './Post';

function Routes() {

  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/new"><NewPost /></Route>
        <Route exact path="/posts/:postId"><Post /></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
export default Routes;