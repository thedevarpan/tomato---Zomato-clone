import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Sign up to start ordering food.</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <Link to="/user/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
