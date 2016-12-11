import React from "react";
import UserStore from "../stores/user";
import ChallengeContainer from "../components/challenge-container"
import ResultApi from "../api/ResultApi";
let resultApi = new ResultApi();

const LeaderboardPage = React.createClass({
  displayName: "LeaderboardPage",

  getInitialState() {
    return {
      users: this.sortUsers(UserStore.getUsers())//this.sortUsers([{name: 'test', totalPoints: 0}, {name: 'test2', totalPoints: 1},{name: 'test2', totalPoints: 5},{name: 'test2', totalPoints: 4},{name: 'test2', totalPoints: 1},{name: 'test2', totalPoints: 3},{name: 'test2', totalPoints: 1},{name: 'test2', totalPoints: 1},{name: 'test2', totalPoints: 1},{name: 'test2', totalPoints: 1},{name: 'test2', totalPoints: 1}])
    };
  },

  sortUsers(users) {
    users.sort((a, b) => {return b.totalPoints-a.totalPoints});
    return users;
  },

  componentWillMount() {
    UserStore.fetchAll();
    UserStore.addChangeListener(this.onStoreChange);
  },

  componentWillUnmount() {
    UserStore.removeChangeListener(this.onStoreChange);
  },

  onStoreChange() {
    this.setState({users: this.sortUsers(UserStore.getUsers())});
  },

  renderLeaders() {
    let idx = 0;
    return this.state.users.map((user) => {
      idx++;
      let rowStyle = idx % 2 == 0 ? 'row-leaderboard' : 'row2-leaderboard';
      return (<div className={`row text-center ${rowStyle}`}>
        <h5 className="col-md-2">{idx}</h5>
        <h5 className="col-md-8">{user.name}</h5>
        <h5 className="col-md-2">{user.totalPoints}</h5>
      </div>)
    })
  },

  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <div className="row text-center head-leaderboard">
          <h4 className="col-md-2">Rang</h4>
          <h4 className="col-md-8">Name</h4>
          <h4 className="col-md-2">Points</h4>
        </div>
        {this.renderLeaders(this.state.users)}
      </div>
    );
  },
});

export default LeaderboardPage;