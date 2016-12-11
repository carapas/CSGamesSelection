/**
 * Dependencies
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * Constants
 */

var ResultSchema = new Schema({
  cip: {type: String},
  challenge: {type: String},
  percent: {type: Number},
  points: {type: Number},
  results: [{
      name: {type: String},
      isSuccess: {type: Boolean},
      isTimeout: {type: Boolean}
    }
  ]
}, {
  toObject: { virtuals: true }
});

ResultSchema.index({ cip: 1, challenge: 1}, {unique: true} );

/**
 * Virtuals
 */
ResultSchema.virtual('created').get(function () {
  return this._id.getTimestamp();
});

/**
 * Statics
 */

ResultSchema.statics.getUsersPoints = function() {
  return this.aggregate([{ $group: { _id: "$cip", points: { $sum: "$points" } } },{ $sort: { points: -1 } }]);
};

ResultSchema.statics.save = function *(result) {
  return this.update({cip: result.cip, challenge: result.challenge}, result, {upsert: true});
};

// Model creation
mongoose.model("Result", ResultSchema);
