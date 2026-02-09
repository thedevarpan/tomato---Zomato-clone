import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/AuthForm.css'
import axios from 'axios'

const PartnerRegister = () => {

  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const fname = e.target.firstName.value;
    const lname = e.target.lastName.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:3000/api/auth/food-partner/register", {
      name: businessName,
      contactName: `${fname} ${lname}`,
      phone,
      address,
      email,
      password,
    }, { withCredentials: true });
    navigate("/create-food");
  };

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1 className='auth-title'>Register as food partner</h1>
          <p className='auth-subtitle'>Onboard your kitchen and start receiving orders</p>
        </div>

        <form onSubmit={submitHandler} className='auth-form'>

          {/* Business Name */}
          <div className='form-group'>
            <label className='label'>Business name</label>
            <input className='input' name='businessName' type='text' placeholder='Your kitchen / restaurant name' required />
          </div>

          {/* Contact person name */}
          <div className='row'>
            <div className='form-group'>
              <label className='label'>First name</label>
              <input className='input' name='firstName' type='text' placeholder='John' required />
            </div>

            <div className='form-group'>
              <label className='label'>Last name</label>
              <input className='input' name='lastName' type='text' placeholder='Doe' required />
            </div>
          </div>

          {/* Email & Phone */}
          <div className='row'>
            <div className='form-group'>
              <label className='label'>Email</label>
              <input className='input' name='email' type='email' placeholder='contact@kitchen.com' required />
            </div>

            <div className='form-group'>
              <label className='label'>Phone</label>
              <input className='input' name='phone' type='tel' placeholder='9876543210' required />
            </div>
          </div>

          {/* Address */}
          <div className='form-group'>
            <label className='label'>Address</label>
            <input className='input' name='address' type='text' placeholder='Full kitchen address' required />
          </div>

          {/* Password */}
          <div className='row'>
            <div className='form-group'>
              <label className='label'>Password</label>
              <input className='input' name='password' type='password' placeholder='••••••••' required />
            </div>

            <div className='form-group'>
              <label className='label'>Confirm password</label>
              <input className='input' name='confirmPassword' type='password' placeholder='••••••••' required />
            </div>
          </div>

          {/* Actions */}
          <div className='actions'>
            <button className='button' type='submit'> Register partner </button>
            <Link className='button secondary' to='/food-partner/login'> Already registered? Sign in </Link>
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
