import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AuthForm.css'

const UserRegister = () => {
  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Create your account</h1>
          <p className='auth-subtitle'>Join as a user to explore and order</p>
        </div>

        <form className='auth-form'>
          <div className='form-group'>
            <label className='label'>Full name</label>
            <input className='input' type='text' placeholder='John Doe' />
          </div>

          <div className='form-group'>
            <label className='label'>Email</label>
            <input className='input' type='email' placeholder='you@example.com' />
          </div>

          <div className='row'>
            <div className='form-group'>
              <label className='label'>Password</label>
              <input className='input' type='password' placeholder='••••••••' />
            </div>
            <div className='form-group'>
              <label className='label'>Confirm</label>
              <input className='input' type='password' placeholder='••••••••' />
            </div>
          </div>

          <div className='actions'>
            <button className='button' type='button'>Create account</button>
            <Link className='button secondary' to='/user/login'>Already have an account? Sign in</Link>
          </div>
        </form>

        <div className='auth-footer'>
          <span>Or</span> <Link className='link' to='/food-partner/register'>register as food partner</Link>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
