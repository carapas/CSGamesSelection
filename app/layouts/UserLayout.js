import React, { Component, PropTypes } from "react";
import TransitionGroup from "react/lib/ReactCSSTransitionGroup";
import connectToStore from "flummox/connect";

import { RouteHandler } from "react-router/build/lib";
import { Nav, Row, Col } from "react-bootstrap";
import { NavItemLink } from "react-router-bootstrap";

import makeFullHeight from "../composition/makeFullHeight";

class UserLayout extends Component {
  static displayName = "UserLayout";

  static contextTypes = {
    router: PropTypes.func,
  };

  render() {
    const name = this.context.router.getCurrentPath();
    return (
      <div className="container content-wrapper">
        <div className="transition-crop" style={{ "minHeight": this.props.height }}>
          <TransitionGroup transitionName="transition">
            <div className="well printable-content" key={name}>
              <RouteHandler />
            </div>
          </TransitionGroup>
        </div>
      </div>
    );
  }
};

const FullHeightLayout = makeFullHeight(UserLayout, () => {
  let height = window.innerHeight;
  let navbarHeight = document.getElementsByClassName("content-wrapper")[0].getBoundingClientRect().top;
  return height - navbarHeight;
});

const ConnectedLayout = connectToStore(FullHeightLayout, {
  auth: store => ({
    user: store.getAuthenticatedUser(),
  })
});

ConnectedLayout.willTransitionTo = function(transition) {
  if (!transition.context.flux.getStore("auth").getAuthenticatedUser()) {
    transition.redirect("signin");
  }
};

export default ConnectedLayout;
