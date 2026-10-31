
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    setMessage("Registering...");

    try {
      const res = await fetch(
        "http://localhost:3000/api/emp/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            emailid: email,
            password: password,
            role: role
          })
        }
      );

      const data = await res.json();

      if (res.ok) {

        setMessage("Registration successful!");

        setName("");
        setEmail("");
        setPassword("");
        setRole("");

      } else {
        setMessage(data.msg || data.message || "Registration failed!");
      }

    } catch (error) {
      console.log("Registration error:", error);

      setMessage(
        "Cannot connect to server. Please check backend."
      );
    }
  };

  return (
    <main className="register-page">

      <div className="register-card">

        <div className="register-heading">

          <div className="register-logo">A</div>

          <h2>Create Your Account</h2>

          <p>Register to get started with AKSHARA</p>

        </div>

        <form onSubmit={handleRegister}>

          <div className="register-input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label>Password</label>

            <div className="register-password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          <div className="register-input-group">
            <label>Select Your Role</label>

            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
            >
              <option value="">Choose your role</option>
              <option value="HR">HR</option>
              <option value="EMPLOYEE">Employee</option>
            </select>
          </div>

          {message && (
            <p className="register-message">{message}</p>
          )}

          <button type="submit" className="register-submit">
            Create Account
          </button>

        </form>

        <p className="register-login-text">
          Already have an account?
          <Link to="/login"> Login Here</Link>
        </p>

      </div>

    </main>
  );
}

export default Register;
