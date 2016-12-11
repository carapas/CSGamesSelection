import React from "react";
import Spinner from "react-spinkit";
import ChallengeApi from "../api/ChallengeApi";
import {Doughnut} from "react-chartjs";
import {Jumbotron, ButtonToolbar, Glyphicon} from "react-bootstrap";
import { Navigation } from 'react-router/build/lib';

var challengeApi = new ChallengeApi();

const ResultPage = React.createClass({
  mixins: [Navigation],
  displayName: "ResultPage",

  getInitialState() {
    return {
      resultLoaded: false,
      type: 'bubbles'
    };
  },

  componentWillMount() {
    let self = this;
    this.interval = setInterval(() => {
      self.handleResult(challengeApi.getChallengeResult(this.props.params.defi));
    }, 5000);
  },

  handleResult(res) {
    res.then(result => {
      clearInterval(this.interval);
      this.setState({
        resultLoaded: true,
        result: result
      });
    });
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  renderTests() {
    return this.state.result.results.map(test => {
      let className = test.isSuccess ? 'green' : 'red';
      let glyph = test.isSuccess ? 'ok' : 'minus';
      let timeout = test.isTimeout ? <span><Glyphicon glyph="time" /> (timeout)</span> : '';
      return <li className={className}><Glyphicon glyph={glyph} /> {test.name} {timeout}</li>
    });
  },

  render() {
    if(!this.state.resultLoaded) {
      return (
        <div>
          <Spinner noFadeIn spinnerName='rotating-plane'/>
          <h2 className='text-center'>Please wait while we are computing the results...</h2>
        </div>
      )
    }

    let chartData = [{
        value: this.state.result.percent*100,
        color:"#2d9d5f",
        highlight: "#38B36F",
        label: "Success"
    },
    {
      value: 100-this.state.result.percent*100,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Failure"
    }];

    let style = {position: 'absolute', margin: 'auto', top: '41%', left:'0', right: '0', textAlign: 'center', fontWeight: 'bold', fontSize: '36px'}

    return (
      <div className="row">
        <div className="col-md-6">
        <Jumbotron style={{padding: '20px', marginLeft: 'auto', marginRight: '20px', width: '312px', position: 'relative'}} className='well'>
          <h3 style={{marginTop: '0px', fontWeight: 'bold', fontSize: '16px'}}>Score</h3>
          <Doughnut data={chartData} width="250" height="250" redraw />
          <h2 style={style}>{`${this.state.result.percent*100}%`}</h2>
          <ButtonToolbar style={{marginTop: '10px'}}>
            <button onClick={() => {this.transitionTo("defi", this.props.params);}} style={{width: '49%', marginRight: '2%', height:'50px'}} className="green" type="button">Try again</button>
            <button onClick={() => {this.transitionTo("challenges");}} style={{width: '49%', height:'50px'}} className="gray" type="button">New Challenge</button>
          </ButtonToolbar>
        </Jumbotron>
        </div>
        <div className="col-md-6">
          <Jumbotron className="well" style={{width: '400px'}}>
            <h3 style={{marginTop: '0px', fontWeight: 'bold', fontSize: '16px'}}>Tests</h3>
            <ul style={{'padding': '0px'}}>
              {this.renderTests()}
            </ul>
          </Jumbotron>
        </div>
      </div>
    )
  },
});

export default ResultPage;