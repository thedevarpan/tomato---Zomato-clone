import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

const PartnerRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner Registration</h2>
          <p>Grow your business with us.</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input type="text" id="restaurantName" placeholder="Restaurant Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Owner Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" placeholder="Business Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create Password" required />
          </div>
          <button type="submit" className="auth-btn">Register Restaurant</button>
        </form>
        <div className="auth-footer">
          <p>Already a partner? <Link to="/partner/login">Login here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegister
