import React, { Component } from "react";

class FAQPage extends Component {
  static displayName = "FAQPage";

  render() {
    return (
      <div className="faq">
        <h3>Foire aux questions</h3>

        <h4>À quoi servent les Points Génie?</h4>
        <blockquote>Les Points Génie permettront, en bonne partie, de payer les différents frais reliés au bal pour la promotion finissante (Photo des finissants, album, voyage de la finissante, Jonc, etc.)</blockquote>
      </div>
    );
  }
};

export default FAQPage;
