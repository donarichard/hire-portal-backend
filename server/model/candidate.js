const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Candidate model design.
 * @returns {mongooseModel} it returns the schema model of Model
 */
const candidate = new Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    profile_url:{
        type: String,
        required: [true, "can't be blank"],
    },
    age: {
      type: Number,
      required: [true, "can't be blank"],
    },
    year_experience: {
      type: Number,
      required: [true, "can't be blank"],
    },
    graduate: {
      type: String,
      required: [true, "can't be blank"],
    },
    gender: {
      type: String,
      required: [true, "can't be blank"],
    },
    about_experience: {
      type: String,
      required: [true, "can't be blank"],
    },
    status: {
      type: String,
      enum: ["Available", "Unvailable"],
      default: "Available",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Candidate", candidate);
