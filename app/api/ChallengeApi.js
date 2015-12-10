import request from "superagent";
import ResourceApi from "./ResourceApi";
import Challenge from "../models/Challenge";
import Result from "../models/Result";

class ChallengeApi extends ResourceApi {
  static resourceUrl = "challenges";
  static resourceName = {
    singular: "challenge",
    plural: "challenges",
  };
  static Resource = Challenge;

  getChallengeResult(challenge) {
    let URL = this._getResourceUrl();
    URL += `/${challenge}/result`
    return this._doGet(URL).then(res => this._resultResponse(res));
  }

  _resultResponse(res) {
  	if(!(res.body && res.body.result)) {
  		let err = new Error('Result doesnt exists');
  		err.res = res;
  		return Promise.reject(err);
  	}

  	return Promise.resolve(new Result(res.body.result));
  }
};


export default ChallengeApi;
