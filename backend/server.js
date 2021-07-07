const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
require("dotenv").config({ path: "./config/dev.env" });
require("./Db/mongosse");
const Team = require("./Model/Teams");
const { isValidObjectId } = require("mongoose");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.get("/", (request, response) => {
  try {
    response.send("Hello");
  } catch {
    response.send("Failed");
  }
});
app.post("/add/player", async (request, response) => {
  try {
    const player = new Team(request.body);
    await player.save();
    response.send(player);
  } catch {
    response.send("Failed to add player");
  }
});

app.get("/search/team/players", async (request, response) => {
  try {
    const team = request.query.team;
    const player = await Team.find({ team });
    response.send(player);
  } catch {
    response.send("No players found with this name");
  }
});
app.get("/all/players", async (request, response) => {
  try {
    const player = await Team.find({});
    response.send(player);
  } catch {
    response.send("No players found ");
  }
});
app.get("/search/players", async (request, response) => {
  try {
    const player = request.query.player;
    const players = await Team.find({
      player: { $regex: player, $options: "i" },
    });
    response.send(players);
  } catch {
    response.send("No players found with this name");
  }
});
app.get("/teams", async (request, response) => {
  try {
    const teams = await Team.find({}).distinct("team");

    response.send(teams);
  } catch {
    response.send("No teams found with this name");
  }
});
app.delete("/delete/player/:id", async (req, res) => {
  try {
    const player = await Team.deleteOne({ _id: req.params.id });

    res.send("Successfully Delte this Player");
  } catch {
    res.send("Cant delete this player");
  }
});
app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
