import React from "react";
import { Route, DefaultRoute } from "react-router/build/lib";

import AdminApplication from "../app/apps/AdminApplication";
import UsersPage from "../app/pages-admin/user-list";

const adminRoutes = (
  <Route handler={AdminApplication}>
    <Route name="index" path="/">
      <DefaultRoute name="list-users" path="/users" handler={UsersPage} />
    </Route>
  </Route>
);

export default adminRoutes;
