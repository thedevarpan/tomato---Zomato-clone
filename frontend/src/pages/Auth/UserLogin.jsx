import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>User Login</h2>
          <p>Welcome back! Please login to your account.</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/user/register">Sign up</Link></p>
          <p style={{ marginTop: '0.5rem' }}>Are you a restaurant? <Link to="/partner/login">Partner Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
