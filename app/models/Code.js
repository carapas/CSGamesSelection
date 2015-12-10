import Model from "./Model";

class Code extends Model {
  static schema = {
    cip: {type: String},
    challenge: {type: String},
    code: {type: String},
    language: {type: String}
  };
}

export default Code;
