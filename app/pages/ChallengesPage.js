import React from "react";
import ChallengeStore from "../stores/challenge";
import ChallengeContainer from "../components/challenge-container"

const ChallengesPage = React.createClass({
  displayName: "ChallengesPage",

  getInitialState() {
    return {challenges: ChallengeStore.getChallenges()};
  },

  componentWillMount() {
    ChallengeStore.init();
    ChallengeStore.addChangeListener(this.onStoreChange);
  },

  componentWillUnmount() {
    ChallengeStore.removeChangeListener(this.onStoreChange);
  },

  onStoreChange() {
    this.setState({challenges: ChallengeStore.getChallenges()});
  },

  renderChallenges() {
    if (this.state.challenges.length === 0) {return <div/>}

    return this.state.challenges.map(challenge => {
      return (
        <ChallengeContainer key={challenge.name} challenge={challenge} />
      )
    });
  },

  render() {
    return (
      <div>
        <h3>Challenges</h3>
        {this.renderChallenges()}
      </div>
    );
  },
});

export default ChallengesPage;