
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(email);
        console.log(password);

        if (email === "admin@gmail.com" && password === "admin") {
            navigate("/Adminhome");
        } else {
            try {
                const req = await fetch(
                    "http://localhost:3000/api/emp/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    }
                );

                const data = await req.json();
                console.log(data);

                if (req.ok) {
                    alert("Login successful!");
                    // Navigate to the employee home page if needed
                    // navigate("/Emphome");
                } else {
                    alert(data.message || "Invalid email or password");
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("Unable to connect to the server.");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <br />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
