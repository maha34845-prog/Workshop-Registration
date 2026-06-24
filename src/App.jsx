import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import RegistrationForm from "./components/RegistrationForm";
import ParticipantTable from "./components/ParticipantTable";
import "./App.css";

function App() {
  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem("participants");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "participants",
      JSON.stringify(participants)
    );
  }, [participants]);

  const addParticipant = (participant) => {
    const duplicate = participants.find(
      (p) =>
        p.email.toLowerCase() ===
        participant.email.toLowerCase()
    );

    if (duplicate) {
      alert("Participant already registered!");
      return false;
    }

    if (participants.length >= 50) {
      alert("Workshop capacity reached!");
      return false;
    }

    setParticipants([
      ...participants,
      {
        ...participant,
        date: new Date().toLocaleString(),
      },
    ]);

    return true;
  };

  const deleteParticipant = (email) => {
    setParticipants(
      participants.filter((p) => p.email !== email)
    );
  };

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">
        Workshop Registration System
      </h1>

      <Dashboard count={participants.length} />

      <RegistrationForm addParticipant={addParticipant} />

      <input
        className="search"
        type="text"
        placeholder="Search participants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ParticipantTable
        participants={filteredParticipants}
        deleteParticipant={deleteParticipant}
      />
    </div>
  );
}

export default App;