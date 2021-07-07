import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import "./Player.css";

function Players() {
  const location = useLocation();
  const team = location.state;
  useEffect(() => {}, []);

  const [inputPl, setInputPl] = useState("");
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    if (team) {
      axios
        .get(`http://localhost:5000/search/team/players?team=${team}`)
        .then((res) => setPlayer(res.data))
        .catch((err) => console.log(err.response));
    } else {
      axios
        .get(`http://localhost:5000/all/players`)
        .then((res) => setPlayer(res.data))
        .catch((err) => console.log(err.response));
    }
  }, []);
  const deletePlayer = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/delete/player/${id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err.response));
  };
  const search = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/search/players?player=${inputPl}`)
      .then((res) => setPlayer(res.data))
      .catch((err) => console.log(err.response));
  };
  return (
    <div>
      <Header />
      <form className="inputSearch" action="" onSubmit={search}>
        <label htmlFor="inputPl">Search Player</label>
        <input
          value={inputPl}
          type="text"
          id="inputPl"
          onChange={(e) => setInputPl(e.target.value)}
        />

        <button>search</button>
      </form>

      <div className="playersInfo">
        {player &&
          player.map((team) => (
            <div className="playerList" onClick={() => deletePlayer(team._id)}>
              <p>{team.player}</p>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Players;
