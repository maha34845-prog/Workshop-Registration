import React from "react";

function Dashboard({ count }) {
  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Participants</h3>
        <p>{count}</p>
      </div>

      <div className="card">
        <h3>Available Seats</h3>
        <p>{50 - count}</p>
      </div>

      <div className="card">
        <h3>Workshops</h3>
        <p>4</p>
      </div>
    </div>
  );
}

export default Dashboard;