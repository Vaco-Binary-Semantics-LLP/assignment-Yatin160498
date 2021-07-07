import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Teams.css";

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div className="teamsPage">
      <Header />
      {teams &&
        teams.map((team, i) => (
          <NavLink
            to={{
              pathname: "/Players",
              state: team,
            }}
            key={i}
            className="teamsContainer"
          >
            <h2>{team}</h2>
          </NavLink>
        ))}
    </div>
  );
}

export default Teams;
