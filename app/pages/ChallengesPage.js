import React from "react";
import ChallengeStore from "../stores/challenge";
import ChallengeContainer from "../components/challenge-container"
import ResultApi from "../api/ResultApi";
import _ from "lodash";
let resultApi = new ResultApi();

const ChallengesPage = React.createClass({
  displayName: "ChallengesPage",

  getInitialState() {
    return {
      challenges: ChallengeStore.getChallenges(),
      results: {},
      curCategory: ''
    };
  },

  componentWillMount() {
    ChallengeStore.init();
    ChallengeStore.addChangeListener(this.onStoreChange);
    resultApi.readAll().then(results => {
      let res = {};
      results.forEach(result => {
        res[result.challenge] = result;
      });

      this.setState({results: res});
    });
  },

  componentWillUnmount() {
    ChallengeStore.removeChangeListener(this.onStoreChange);
  },

  onStoreChange() {
    this.setState({challenges: ChallengeStore.getChallenges()});
  },

  renderChallenges(challenges) {
    if (challenges.length === 0) {return <div/>}

    return challenges.map(challenge => {
      let result = {points: 0};
      if (this.state.results[challenge.name]) {
        result = this.state.results[challenge.name];
      }

      return (
        <ChallengeContainer key={challenge.name} challenge={challenge} result={result} />
      )
    });
  },

  renderCategories() {
    if (this.state.challenges.length === 0) {return <div/>}

    let categories = _.groupBy(this.state.challenges, 'category');
    let catArr = [];
    for (let category in categories) {
      catArr.push(category);
    }
    return catArr.map(category => {
      let challenges = <div />;
      let glyph = 'down';
      let newState = category;
      if (this.state.curCategory == category) {
        challenges = this.renderChallenges(categories[category]);
        glyph = 'up';
        newState = '';
      }

      return (
          <div className="category-container">
            <div className="row category-header" onClick={() => {this.setState({curCategory: newState});}}><h4 className="col-md-11">{category} ({categories[category].length})</h4><span style={{fontSize: '24px', lineHeight: '38px'}} className={`glyphicon glyphicon-menu-${glyph}`}></span></div>
            {challenges}
          </div>
        )
    });
  },

  render() {
    return (
      <div>
        <h3>Challenges</h3>
        {this.renderCategories()}
      </div>
    );
  },
});

export default ChallengesPage;