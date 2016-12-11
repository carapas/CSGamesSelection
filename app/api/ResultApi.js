import request from "superagent";
import ResourceApi from "./ResourceApi";
import Result from "../models/Result";

class ResultApi extends ResourceApi {
  static resourceUrl = "results";
  static resourceName = {
    singular: "result",
    plural: "results",
  };
  static Resource = Result;
};


export default ResultApi;
