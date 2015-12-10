import React from "react";

import GeneralInfo from "../components/GeneralInfo";
import connectToStore from "flummox/connect";

const ProfilePage = React.createClass({
  displayName: "ProfilePage",

  render() {
    const user = this.props.user || {};
    return (
      <div className="user-info">
        <h3>Profil</h3>
        <GeneralInfo infos={user} />
      </div>
    );
  },
});

const ConnectedProfile = connectToStore(ProfilePage, {
  auth: store => ({
    user: store.getAuthenticatedUser(),
  })
});

export default ConnectedProfile;
