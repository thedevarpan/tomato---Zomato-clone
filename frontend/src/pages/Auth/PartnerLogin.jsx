import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AuthForm.css'

const PartnerLogin = () => {
  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Partner sign in</h1>
          <p className='auth-subtitle'>Access your partner dashboard</p>
        </div>

        <form className='auth-form'>
          <div className='form-group'>
            <label className='label'>Email</label>
            <input className='input' type='email' placeholder='you@business.com' />
          </div>
          <div className='form-group'>
            <label className='label'>Password</label>
            <input className='input' type='password' placeholder='••••••••' />
          </div>

          <div className='actions'>
            <button className='button' type='button'>Sign in</button>
            <Link className='button secondary' to='/food-partner/register'>New partner? Register</Link>
          </div>
        </form>

        <div className='auth-footer'>
          <span>Ordering as user?</span> <Link className='link' to='/user/login'>sign in as user</Link>
        </div>
      </div>
    </div>
  )
}

export default PartnerLogin
