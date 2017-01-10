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
import LeaderboardPage from "../app/pages/LeaderboardPage";

const routes = (
  <Route handler={MainApplication}>
    <Route name="home" path="/" handler={UserLayout}>
      <DefaultRoute name="challenges" handler={ChallengesPage} />
      <Route name="profile" path="profile" handler={ProfilePage} />
      <Route name="students" path="students" handler={UserListPage} />
      <Route name="leaderboard" path="/leaderboard" handler={LeaderboardPage} />
    </Route>
    <Route name="defi" path="/defis/:defi" handler={ChallengePage} />
    <Route name="result" path="/defis/:defi/result" handler={ResultPage} />
    <Route name="auth" path="/a" handler={AnonymousLayout}>
      <Route name="signin" path="login" handler={SignInPage} />
      <Redirect from="/" to="signin" />
    </Route>
    <Route name="logout" path="logout" handler={SignOutPage} />
    <Route name="signout" path="signout" handler={SignOutPage} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);

export default routes;
