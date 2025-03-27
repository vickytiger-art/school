import React, { useState } from "react";
import "./Teams.css";
import { FaFootballBall, FaHockeyPuck, FaRunning, FaBasketballBall, FaVolleyballBall } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const Teams = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: "Cricket", icon: <FaFootballBall />, color: "#ffcc80" },
    { id: 2, name: "Hockey", icon: <FaHockeyPuck />, color: "#b3e5fc" },
    { id: 3, name: "Kabaddi", icon: <FaRunning />, color: "#ffab91" },
    { id: 4, name: "Basketball", icon: <FaBasketballBall />, color: "#dcedc8" },
    { id: 5, name: "Volleyball", icon: <FaVolleyballBall />, color: "#f8bbd0" },
  ]);

  const [showAddTeam, setShowAddTeam] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showPlayersPopup, setShowPlayersPopup] = useState(false);
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddTeam = () => {
    if (newTeamName.trim()) {
      const newTeam = {
        id: teams.length + 1,
        name: newTeamName,
        icon: <IoIosAddCircle />,
        color: "#e1bee7",
      };
      setTeams([...teams, newTeam]);
      setShowAddTeam(false);
      setNewTeamName("");
    }
  };

  const handleOpenTeam = (team) => {
    setSelectedTeam(team);
    setPlayers([]); // Load players dynamically here if needed
    setShowPlayersPopup(true);
  };

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
      setPlayers([...players, { id: players.length + 1, name: newPlayerName }]);
      setNewPlayerName(""); // Clear input field after adding
    }
  };

  const handleDeletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  return (
    <div className="teams-container">
      <h2 className="teams-title">Sports Teams</h2>
      <div className="teams-grid">
        {teams.map((team) => (
          <div key={team.id} className="team-card" style={{ backgroundColor: team.color }} onClick={() => handleOpenTeam(team)}>
            <div className="team-icon">{team.icon}</div>
            <h3>{team.name}</h3>
          </div>
        ))}
        <div className="add-team-card" onClick={() => setShowAddTeam(true)}>
          <IoIosAddCircle className="add-icon" />
          <h3>Add Team</h3>
        </div>
      </div>

      {showAddTeam && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add New Team</h3>
            <input type="text" placeholder="Enter team name" value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} />
            <button onClick={handleAddTeam}>Add</button>
            <button className="close-btn" onClick={() => setShowAddTeam(false)}>Close</button>
          </div>
        </div>
      )}

      {showPlayersPopup && selectedTeam && (
        <div className="popup">
          <div className="popup-content player-popup">
            <h3>{selectedTeam.name} Players</h3>
            <input
              type="text"
              placeholder="Enter player name"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
            />
            <button onClick={handleAddPlayer}>Add Player</button>
            <div className="players-list">
              {players.map((player) => (
                <div key={player.id} className="player-item">
                  <span>{player.name}</span>
                  <button className="delete-btn" onClick={() => handleDeletePlayer(player.id)}>Delete</button>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={() => setShowPlayersPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
