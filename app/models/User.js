import Model from "./Model";

class User extends Model {
  static schema = {
    id: { type: String },
    cip: { type: String },
    name: { type: String },
    language: { type: String },
    email: { type: String },
    isAdmin: { type: Boolean },
    created: { type: Date },
    points: [ {
      type: Object,
      shape: {
        id: { type: String },
        reason: { type: String },
        points: { type: Number },
      },
    } ],
    totalPoints: { type: Number }
  };
}

export default User;
