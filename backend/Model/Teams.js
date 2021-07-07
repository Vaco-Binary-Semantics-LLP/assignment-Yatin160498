const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  team: {
    required: true,
    type: String,
    trim: true,
  },
  player: {
    required: true,
    type: String,
    trim: true,
  },
});
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
