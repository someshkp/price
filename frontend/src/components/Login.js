import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://git.heroku.com/inventorymangementapp.git";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/home";
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handlePassword = async() => {
    navigate("/reset-password");
  }
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="login_left">
          <form className="login_form_input_container" onSubmit={handleSubmit}>
            <h1>Login to your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="login_input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="login_input"
            />
            {error && <div className="error_msg">{error}</div>}
            <span className="forget" style={{cursor:"pointer", color:"white"}} onClick={handlePassword}>Forget Password?</span>
            <button type="submit" className="white_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New here?</h1>
          <Link to="/signup">
            <button type="button" className="green_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
