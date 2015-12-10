import React from "react";
import ChallengeStore from "../stores/challenge";
import {Input} from 'react-bootstrap';
import Markdown from 'react-remarkable';
import AceEditor from 'react-ace';
import Infinite from 'react-infinite';
import CodeApi from "../api/CodeApi"
import _ from "lodash";
import { Navigation } from 'react-router/build/lib';

let codeApi = new CodeApi();

require('brace/mode/python');
require('brace/mode/javascript');
require('brace/theme/monokai');

const ChallengePage = React.createClass({
  mixins: [Navigation],
  displayName: "ChallengePage",

  getInitialState() {
    return {
      challenge: {},
      hoverButton: '',
      language: 'python',
      code: '',
      codes: {}
    };
  },

  componentWillMount() {
    ChallengeStore.init();
    ChallengeStore.addChangeListener(this.onStoreChange);
  },

  componentDidMount() {
    this.saveCode = _.debounce(this.saveCode, 5000);
    this.setState({width: window.innerWidth, height: window.innerHeight-50});
    this.onStoreChange();
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    ChallengeStore.removeChangeListener(this.onStoreChange);
  },

  onStoreChange() {
    let challenge = ChallengeStore.getChallenge(this.props.params.defi);
    codeApi.getChallengeCodes(challenge.name).then((codes) => {
      let codeObj = {};
      console.log(codes);
      for(let code of codes) {
        codeObj[code.language] = code.code;
      }
      this.setState({codes: codeObj, code: codeObj[this.state.language]});
    });
    this.setState({challenge: challenge});
  },

  handleResize() {
    this.setState({width: window.innerWidth, height: window.innerHeight-50});
  },

  hoverButton() {
    this.setState({hoverButton: '#f0f0f0'});
  },

  leaveButton() {
    this.setState({hoverButton: ''});
  },

  handleLangChange(e) {
    this.setState({language: e.target.value, code: this.state.codes[e.target.value]});
  },

  saveCode(){
    codeApi.create({language: this.state.language, challenge: this.state.challenge.name, code: this.state.code});
    let codes = this.state.codes;
    codes[this.state.language] = this.state.code;
    this.setState({codes: codes});
  },

  onCodeChange(value) {
    this.setState({'code': value});
    this.saveCode();
  },

  submit() {
    codeApi.submitCode({language: this.state.language, challenge: this.state.challenge.name, code: this.state.code});
    this.transitionTo("result", this.props.params);
  },

  render() {
    if (!this.state.challenge.name) {return <div/>;}
    const border = 10;
    const topBorder = 50;
    const botBorder = 50;

    return (
      <div style={{backgroundColor: "#161616", position: "absolute", top: "50px", height: `${this.state.height}px`, width: `${this.state.width}px`}}>
        <h2 style={{color: "#a0a0a0", margin: "10px", position: 'absolute'}}>Description</h2>
        <h2 style={{color: "#a0a0a0", margin: "10px", position: 'absolute', left: `${this.state.width/2 + border}px`}}>Éditeur</h2>
        <Input onChange={this.handleLangChange} type="select" label="" value={this.state.language} className="green" placeholder="select" style={{width: "125px", margin: "10px", position: 'absolute', right: `${border}px`}}>
          <option value="python">Python 2.7</option>
          <option value="javascript">JavaScript</option>
        </Input>
        <div className="text-center" style={{position: "absolute", backgroundColor: "#27333E", color: "#f0f0f0", left: `${border}px`, top: `${topBorder}px`, height: `${this.state.height-botBorder-topBorder}px`, width: `${this.state.width/2-2*border}px`}}>
          <Infinite containerHeight={this.state.height-botBorder-topBorder} elementHeight={40}>
            <Markdown source={this.state.challenge.content} />
          </Infinite>
        </div>
        <div style={{position: "absolute", top: `${topBorder}px`, left: `${this.state.width/2 + border}px`}}>
          <AceEditor
            mode={this.state.language}
            theme="monokai"
            onChange={this.onCodeChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
            value={this.state.code}
            height={`${this.state.height-botBorder-topBorder}px`}
            width={`${this.state.width/2-2*border}px`}
          />
        </div>
        <div style={{position: "absolute", top: `${this.state.height-botBorder}px`, height: `${botBorder}px`, width:`${this.state.width}px`}}>
          <button onClick={this.submit} onMouseEnter={this.hoverButton} onMouseLeave={this.leaveButton} className="green" style={{backgroundColor: this.state.hoverButton, position: "absolute", top: '10px', left: `${this.state.width/2-100}px`, width: '200px', height: '30px'}} >Submit</button>
        </div>
      </div>
    );
  },
});

export default ChallengePage;