import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AuthForm.css'

const UserLogin = () => {
  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Welcome back</h1>
          <p className='auth-subtitle'>Sign in to continue as user</p>
        </div>

        <form className='auth-form'>
          <div className='form-group'>
            <label className='label'>Email</label>
            <input className='input' type='email' placeholder='you@example.com' />
          </div>
          <div className='form-group'>
            <label className='label'>Password</label>
            <input className='input' type='password' placeholder='••••••••' />
          </div>

          <div className='actions'>
            <button className='button' type='button'>Sign in</button>
            <Link className='button secondary' to='/user/register'>New here? Create account</Link>
          </div>
        </form>

        <div className='auth-footer'>
          <span>Are you a partner?</span> <Link className='link' to='/food-partner/login'>sign in as food partner</Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
