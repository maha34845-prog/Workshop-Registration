import React, { useState } from "react";

function RegistrationForm({ addParticipant }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = addParticipant(formData);

    if (success) {
      setMessage(
        `Registration Successful! Welcome ${formData.name}`
      );

      setFormData({
        name: "",
        email: "",
        workshop: "",
      });
    }
  };

  return (
    <div className="form-card">
      <h2>Register Now</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="workshop"
          value={formData.workshop}
          onChange={handleChange}
          required
        >
          <option value="">Select Workshop</option>
          <option>React JS</option>
          <option>Python</option>
          <option>Cyber Security</option>
          <option>Data Science</option>
        </select>

        <button type="submit">
          Register
        </button>
      </form>

      {message && (
        <div className="message">
          {message}
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;