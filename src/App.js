import "./App.css";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Email from "./Email";
import Code from "./Code";
import Password from "./Password";
import Success from "./Success"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Email />}></Route>
        <Route path="/code" element={<Code />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
