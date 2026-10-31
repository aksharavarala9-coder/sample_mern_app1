
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("Checking login details...");

    // Admin login
    if (email === "admin@gmail.com" && password === "admin") {
      setMessage("");
      navigate("/Adminhome");
      return;
    }

    try {
      const req = await fetch(
        "http://localhost:3000/api/emp/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            emailid: email,
            password: password
          })
        }
      );

      const data = await req.json();

      if (req.ok && data.user) {
        setMessage("");

        alert("Login successful!");

        // Navigate based on user role
        if (data.user.role === "HR") {
          navigate("/Hrhome");
        } 
        else if (data.user.role === "EMPLOYEE") {
          navigate("/Emphome");
        } 
        else if (data.user.role === "ADMIN") {
          navigate("/Adminhome");
        } 
        else {
          setMessage("User role is not recognized.");
        }

      } else {
        setMessage(data.msg || "Invalid email or password.");
      }

    } catch (error) {
      console.log("Login error:", error);
      setMessage("Cannot connect to server. Please check backend.");
    }
  };

  return (
    <main className="login-page">

      <div className="login-card">

        <div className="login-heading">
          <div className="login-logo">A</div>

          <h2>Welcome Back!</h2>

          <p>Login to your account</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="login-input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {message && (
            <p className="login-message">{message}</p>
          )}

          <button type="submit" className="login-submit">
            Login
          </button>

        </form>

        <p className="login-register-text">
          Don't have an account?
          <Link to="/register"> Register Now</Link>
        </p>

      </div>

    </main>
  );
}

export default Login;
