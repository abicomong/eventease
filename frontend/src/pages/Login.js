import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosApi";
import signupHeader from "../assets/logo_header.png";
import "../stylesheets/signup.css";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axiosInstance.get("/api/checkLoggedIn");
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    checkLoggedIn();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/myevents");
    }
  }, [isLoggedIn, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/api/login/", formData);
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setError("Invalid username or password.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup_container">
      <div className="left_container"></div>
      <div className="right_container">
        <div className="signup_header">
          <img src={signupHeader} alt="EventEase Header" />
        </div>
        <div className="signup_fields">
          <h3>Login</h3>
          <div className="input">
            <p className="input_label">
              Username<span>*</span>
            </p>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <p className="input_label">
              Password<span>*</span>
            </p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="bottom_links">
            <div className="bottom_text">
              <Link to="/register" className="login_btn">
                Don’t have an account yet?
              </Link>
            </div>
            <div className="signup_btn" onClick={submitForm}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
