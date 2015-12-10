import React, { PropTypes } from "react";

import connectToStore from "flummox/connect";

import { Link } from "react-router/build/lib";

import { Navbar, Nav, Glyphicon } from "react-bootstrap";
import { NavItemLink } from "react-router-bootstrap";

const NavbarLayout = React.createClass({
  displayName: "NavbarLayout",

  propTypes: {
    username: PropTypes.string,
  },

  render() {
    const faq = this.props.user ? "faq" : "a-faq";
    return (
      <Navbar brand={this.renderBrand()} toggleNavKey="0" className="main-navbar" fixedTop>
        <Nav navbar collapsible={true} expanded={false} eventKey="0" right>
          <NavItemLink to={faq}><Glyphicon glyph="pushpin"/> FAQ</NavItemLink>
          {this.renderAuthenticatedLinks()}
        </Nav>
      </Navbar>
    );
  },

  renderBrand() {
    return (
      <Link to="faq">
        <span className="eng57logo"></span>
        Sélection CS Games 2016
      </Link>
    );
  },

  renderAuthenticatedLinks() {
    const username = this.props.user ? this.props.user.name : "";
    if (!username) {
      return null;
    }
    const admin = this.props.user.isAdmin ? <li key="admin"><a href="/admin#/"><Glyphicon glyph="star" /> Admin</a></li> : <span/>;
    return [
      (<NavItemLink key="challenges" to="challenges"><Glyphicon glyph="tasks"/> Challenges</NavItemLink>),
      (<NavItemLink key="profile" to="profile"><Glyphicon glyph="user"/> {username}</NavItemLink>),
      (admin),
      (<NavItemLink key="sginout" to="signout"><Glyphicon glyph="off"/> Déconnexion</NavItemLink>),
    ];
  },
});

const ConnectedNavbar = connectToStore(NavbarLayout, {
  auth: store => ({
    user: store.getAuthenticatedUser(),
  })
});

export default ConnectedNavbar;
