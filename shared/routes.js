import React from "react";
import { Route, DefaultRoute, Redirect, NotFoundRoute } from "react-router/build/lib";

import UserLayout from "../app/layouts/UserLayout";
import AnonymousLayout from "../app/layouts/AnonymousLayout";

import ProfilePage from "../app/pages/ProfilePage";
import FAQPage from "../app/pages/FAQPage";
import SignInPage from "../app/pages/SignInPage";
import SignOutPage from "../app/pages/SignOutPage";
import NotFoundPage from "../app/pages/NotFoundPage";
import UserListPage from "../app/pages/UserListPage";
import MainApplication from "../app/apps/MainApplication";
import ChallengesPage from "../app/pages/ChallengesPage";
import ChallengePage from "../app/pages/ChallengePage";
import ResultPage from "../app/pages/ResultPage";

const routes = (
  <Route handler={MainApplication}>
    <Route name="home" path="/" handler={UserLayout}>
      <Route name="challenges" path="defis" handler={ChallengesPage} />
      <Route name="profile" path="profile" handler={ProfilePage} />
      <DefaultRoute name="faq" handler={FAQPage} />
      <Route name="students" path="students" handler={UserListPage} />
    </Route>
    <Route name="defi" path="/defis/:defi" handler={ChallengePage} />
    <Route name="result" path="/defis/:defi/result" handler={ResultPage} />
    <Route name="auth" path="/a" handler={AnonymousLayout}>
      <Route name="signin" path="login" handler={SignInPage} />
      <Redirect from="/" to="signin" />
      <Route name="a-faq" path="faq" handler={FAQPage} />
    </Route>
    <Route name="logout" path="logout" handler={SignOutPage} />
    <Route name="signout" path="signout" handler={SignOutPage} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);

export default routes;
