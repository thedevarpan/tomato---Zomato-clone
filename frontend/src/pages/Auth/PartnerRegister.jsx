import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AuthForm.css'

const PartnerRegister = () => {
  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Register as food partner</h1>
          <p className='auth-subtitle'>Onboard your kitchen and start receiving orders</p>
        </div>

        <form className='auth-form'>
          <div className='form-group'>
            <label className='label'>Business name</label>
            <input className='input' type='text' placeholder='Your kitchen' />
          </div>

          <div className='form-group'>
            <label className='label'>Contact email</label>
            <input className='input' type='email' placeholder='contact@kitchen.com' />
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
            <button className='button' type='button'>Register partner</button>
            <Link className='button secondary' to='/food-partner/login'>Already registered? Sign in</Link>
          </div>
        </form>

        <div className='auth-footer'>
          <span>Prefer ordering?</span> <Link className='link' to='/user/register'>register as a user</Link>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegister
