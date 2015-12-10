import Model from "./Model";

class Challenge extends Model {
  static schema = {
    name: {type: String},
    content: {type: String}
  };
}

export default Challenge;
