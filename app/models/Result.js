import Model from "./Model";

class Result extends Model {
  static schema = {
	cip: {type: String},
	challenge: {type: String},
	percent: {type: Number},
	results: [{
	  type: Object,
	  shape: {
	  	name: {type: String},
	  	isSuccess: {type: Boolean},
	  	isTimeout: {type: Boolean}
	  }
	}]
  }
}

export default Result;
