import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

const PartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner Login</h2>
          <p>Manage your restaurant business.</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" placeholder="Enter business email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="auth-btn">Login as Partner</button>
        </form>
        <div className="auth-footer">
          <p>New to our platform? <Link to="/partner/register">Register Restaurant</Link></p>
          <p style={{ marginTop: '0.5rem' }}>Looking for food? <Link to="/user/login">User Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default PartnerLogin
