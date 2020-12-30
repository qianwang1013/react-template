import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar } from "../components/navbar";
import Article from "../pages/Article";
import Main from "../pages/Main";
import SignInPage from "../pages/SignIn";
import { UserState } from "../stores/user/state";

const AppRouter: React.FC<{ isLoggedIn?: boolean }> = ({ isLoggedIn }) => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/article" render={() => <Article />} />
          <Route excat path="/" render={() => <Main />} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect((state: { user: UserState }) => ({
  isLoggedIn: !!state.user.user,
}))(AppRouter);
