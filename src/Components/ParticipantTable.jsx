import React from "react";

function ParticipantTable({
  participants,
  deleteParticipant,
}) {
  return (
    <div className="table-card">
      <h2>Participant List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Workshop</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {participants.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.workshop}</td>
              <td>{p.date}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteParticipant(p.email)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantTable;