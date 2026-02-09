import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/AuthForm.css'
import axios from 'axios'

const UserRegister = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("first")
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:3000/api/auth/user/register", {
      fullname: `${fname} ${lname}`,
      email,
      password,
    }, { withCredentials: true });
    navigate("/");
  }

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Create your account</h1>
          <p className='auth-subtitle'>Join as a user to explore and order</p>
        </div>

        <form onSubmit={submitHandler} className='auth-form'>

          <div className='row'>
            <div className='form-group'>
              <label className='label'>First name</label>
              <input className='input' name='fname' type='text' placeholder='John' />
            </div>
            <div className='form-group'>
              <label className='label'>Last name</label>
              <input className='input' name='lname' type='text' placeholder='Doe' />
            </div>
          </div>

          <div className='form-group'>
            <label className='label'>Email</label>
            <input className='input' name='email' type='email' placeholder='you@example.com' />
          </div>

          <div className='form-group'>
            <label className='label'>Password</label>
            <input className='input' name='password' type='password' placeholder='••••••••' />
          </div>

          <div className='actions'>
            <button className='button' type='submit'>Create account</button>
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
