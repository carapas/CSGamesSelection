import request from "superagent";
import ResourceApi from "./ResourceApi";
import Code from "../models/Code";

class CodeApi extends ResourceApi {
  static resourceUrl = "codes";
  static resourceName = {
    singular: "code",
    plural: "codes",
  };
  static Resource = Code;

  getChallengeCodes(challenge) {
    let URL = this._getResourceUrl();
    URL += `?challenge=${challenge}`
    return this._doGet(URL).then(res => this._multiResourceResponse(res));
  }

  submitCode(code) {
    let URL = this._getResourceUrl();
    URL += '/submit';
    this._doPost(URL, code);
  }
};


export default CodeApi;
