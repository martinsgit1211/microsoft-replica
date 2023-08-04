import logo from './img/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg';
import './App.css';
import { Link } from "react-router-dom";

function Password() {
  return (
    <>
    <div className="container">
    <div className="container2">
      <img className="logo" src={logo} alt="logo"/>
      <h2 style={{fontSize:'24px', fontWeight:'600',height:'28px', width:'352px', textDecoration: 'none solid rgb(27,27,27)'}}>
        Enter password
      </h2>
      <input id="myInput" type="password" placeholder="Password"/>
      <p style={{marginBottom: '0px', fontSize:'15px'}}>
        <a href="" id="link" style={{color: '#0067b8'}}>
            Forgot password?
        </a>
      </p>
      <br/>
      <p style={{marginTop: '0px', fontSize:'15px'}}>
        <a href="#" id="link" style={{color: '#0067b8'}}>
            Email code
        </a>
      </p>
      <div>
        <Link to="/success">
          <button type="button" id="next">Sign in</button>
        </Link>
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
  )
}

export default Password