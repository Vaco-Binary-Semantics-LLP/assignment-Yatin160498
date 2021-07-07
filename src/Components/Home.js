import React, { useState } from "react";
import "./Home.css";
import Header from "./Header";
import axios from "axios";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  const [player, setPlayer] = useState("");
  const [team, setTeam] = useState("");
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/add/player`, { team, player })
      .then((res) => history.replace("/Teams"))
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="container">
      <Header />
      <form className="inputForm" onSubmit={submit}>
        <h2>Add Player</h2>
        <div className="input">
          <label htmlFor="player">Player Name</label>
          <input
            value={player}
            type="text"
            id="player"
            onChange={(e) => setPlayer(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="team">Team Name</label>
          <input
            value={team}
            type="text"
            id="team"
            onChange={(e) => setTeam(e.target.value.toUpperCase())}
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
export default Home;
