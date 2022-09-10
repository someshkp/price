import React from 'react'
import { Link } from "react-router-dom";

const Otpform = () => {
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="login_left">
          <form className="login_form_input_container" >
            <h1>Reset Password</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
            //   onChange={handleChange}
            //   value={data.email}
              required
              className="login_input"
            />
            {/* {error && <div className="error_msg">{error}</div>} */}
            <button type="submit" className="white_btn">
              send otp
            </button>
          </form>
        </div>
        <div className="right">
          <h1>Login to your Account</h1>
          <Link to="/">
            <button type="button" className="green_btn">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Otpform