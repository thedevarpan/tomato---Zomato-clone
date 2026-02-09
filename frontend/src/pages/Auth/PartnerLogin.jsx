import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/AuthForm.css'
import axios from 'axios'

const PartnerLogin = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:3000/api/auth/food-partner/login", {
      email,
      password
    }, { withCredentials: true });
    navigate("/create-food")
  }

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Partner sign in</h1>
          <p className='auth-subtitle'>Access your partner dashboard</p>
        </div>

        <form onSubmit={submitHandler} className='auth-form'>
          <div className='form-group'>
            <label className='label'>Email</label>
            <input className='input' name='email' type='email' placeholder='you@business.com' />
          </div>

          <div className='form-group'>
            <label className='label'>Password</label>
            <input className='input' name='password' type='password' placeholder='••••••••' />
          </div>

          <div className='actions'>
            <button className='button' type='submit'>Sign in</button>
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
