import React, { useState } from "react";
import "./Dashboard.css";
import { FaBasketballBall, FaFutbol, FaVolleyballBall, FaChalkboardTeacher, FaGamepad } from "react-icons/fa";
import { GiCricketBat, GiWhistle } from "react-icons/gi";
import { MdEvent, MdSchool, MdPhoto } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const [showGame, setShowGame] = useState(false);
  const openGame = () => {
    setShowGame(true);
  };
  
  const closeGame = () => {
    setShowGame(false);
  };

  const [selectedTeam, setSelectedTeam] = useState(null);

  const sportsTeams = [
    { name: "Cricket", icon: <GiCricketBat /> },
    { name: "Kabaddi", icon: <GiWhistle /> },
    { name: "Hockey", icon: <FaFutbol /> },
    { name: "Basketball", icon: <FaBasketballBall /> },
    { name: "Volleyball", icon: <FaVolleyballBall /> },
  ];

  const topTeachers = ["Mr. Sharma", "Ms. Verma", "Mrs. Singh"];

  const topStudents = [
    { class: "1", name: "Aarav" },
    { class: "2", name: "Ishita" },
    { class: "3", name: "Rohan" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏫 School Management Dashboard</h1>
      <p className="dashboard-date">{dayName}, {formattedDate}</p>

      {/* Attendance Section */}
      <div className="dashboard-section">
        <h2>📊 Attendance Summary</h2>
        <div className="attendance-grid">
          {["LKG", "UKG", "Prep", "Nursery", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)].map((cls) => (
            <div className="attendance-card" key={cls}>
              <h3>{cls}</h3>
              <p>Total: 50</p>
              <p>Present: 45</p>
              <p>Absent: 5</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Section */}
      <div className="dashboard-section">
        <h2>🏆 Sports Teams</h2>
        <div className="sports-grid">
          {sportsTeams.map((team) => (
            <div key={team.name} className="sports-card" onClick={() => setSelectedTeam(team.name)}>
              {team.icon}
              <p>{team.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Students */}
      <div className="dashboard-section">
        <h2>🏅 Top Students</h2>
        <div className="top-students-grid">
          {topStudents.map((student, index) => (
            <div className="top-student-card" key={index}>
              <AiFillStar className="star-icon" />
              <p>{student.name}</p>
              <span>Class {student.class}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Teachers */}
      <div className="dashboard-section">
        <h2>📚 Top Teachers</h2>
        <div className="teachers-grid">
          {topTeachers.map((teacher, index) => (
            <div className="teacher-card" key={index}>
              <FaChalkboardTeacher />
              <p>{teacher}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="dashboard-section">
        <h2>🎉 School Events</h2>
        <div className="event-card"><MdEvent /> Annual Function</div>
        <div className="event-card"><MdEvent /> Farewell</div>
      </div>

      {/* Gallery Section */}
      <div className="dashboard-section">
        <h2>📸 School Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><MdPhoto /></div>
          <div className="gallery-item"><MdPhoto /></div>
          <div className="gallery-item"><MdPhoto /></div>
        </div>
      </div>

      {/* ABC Learning Game */}
      <div className="dashboard-section">
        <h2>🎮 ABC Learning Game</h2>
        <div className="game-card">
          <FaGamepad />
          <button className="play-btn" onClick={openGame}>Click to Play</button>

        </div>
        {showGame && (
  <div className="game-overlay">
    <div className="game-container">
      <h2>Learn ABC</h2>
      <p>Tap on the letters to learn!</p>
      <button onClick={closeGame} className="close-btn">Close</button>
    </div>
  </div>
)}
      </div>

      {/* Sports Team Popup */}
      {selectedTeam && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedTeam} Team Members</h2>
            <p>1. Player One</p>
            <p>2. Player Two</p>
            <p>3. Player Three</p>
            <button onClick={() => setSelectedTeam(null)}>Close</button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Dashboard;
