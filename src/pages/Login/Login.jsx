import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/greatstack/logo.png";
import { signin, signup, logout } from "../../firebase";
import netflixSpinner from "../../assets/greatstack/netflix_spinner.gif";

function Login() {
  const navigate = useNavigate();

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (signState === "Sign In") {
      await signin(email, password);
    } else {
      await signup(name, email, password);
    }

    setLoading(false);
    navigate("/");
  };

  return loading ? (
    <div className="spinner">
      <img src={netflixSpinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="loginLogo" alt="" />
      <div className="loginForm">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="formSwitch">
          {signState === "Sign In" && (
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          )}
          {signState === "Sign Up" && (
            <p>
              Already have account?
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
