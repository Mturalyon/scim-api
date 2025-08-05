import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (

    <Router>
      <nav style={{ padding: "15px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/register"style={{ marginRight: "10px" }}>Register</Link>
        <Link to="/resetpassword">Reset Password</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
