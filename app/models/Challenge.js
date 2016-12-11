import Model from "./Model";

class Challenge extends Model {
  static schema = {
    name: {type: String},
    content: {type: String},
    points: {type: Number},
    category: {type: String},
    isCodingChallenge: {type: Boolean}
  };
}

export default Challenge;
