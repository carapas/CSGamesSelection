import React from "react";
import {ButtonToolbar, Modal, Button, Glyphicon} from 'react-bootstrap';
import { Navigation } from 'react-router/build/lib';
import Markdown from 'react-remarkable';

const ChallengeContainer = React.createClass({
  displayName: "ChallengeContainer",
  mixins: [Navigation],

  getInitialState() {
    return {showModal: false};
  },

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  },

  render() {
    let { challenge, result } = this.props;
    let type = challenge.isCodingChallenge ? 'Coding challenge' : 'Capture the flag';
    return (
      <div key={challenge.name} className="challenge-container well row">
        <div className="col-md-6">
          <h4 style={{margin: '0px'}}>{challenge.name} ({type})</h4>
          <h5><Glyphicon glyph="flash" /> {`${result.points}/${challenge.points}`}</h5>
        </div>
        <ButtonToolbar className="col-md-4" style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
          <button onClick={() => {this.transitionTo("defi", {defi: challenge.name});}} type="button" style={{height: '40px', width: '140px', marginRight: '10px', right: '290px'}} className="green">Résoudre</button> 
          <button onClick={this.toggleModal} type="button" style={{height: '40px', width: '140px'}} className="gray">Description</button> 
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.toggleModal}>
          <Modal.Body>
            <Markdown source={challenge.content} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
});

export default ChallengeContainer;