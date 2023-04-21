import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginView.css";
import config from "../config";

const LoginView = ({ setAuthToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${config.API_BASE_URL}/api/admin/login`,
        {
          username,
          password,
        }
      );

      localStorage.setItem("x-auth-token", response.data.token);
      setAuthToken(localStorage.getItem("x-auth-token"));
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.error || "Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Admin Login Portal</legend>
          <div className="form-group">
            <label className="form-label mt-4">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <br />
          {error && <p className="error-message">{error}</p>}
        </fieldset>
      </form>
    </div>
  );
};

export default LoginView;
