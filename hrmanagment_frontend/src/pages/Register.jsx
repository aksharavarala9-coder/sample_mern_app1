
import { useState } from "react";

function Register() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [role, setRole] = useState("");
    let [message, setMessage] = useState("");

    let handleRegister = async (event) => {
        event.preventDefault();
        setMessage("Registering...");

        try {
            let res = await fetch(
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

            let data = await res.json();

            if (res.ok) {
                console.log("Data inserted successfully");
                console.log(data);

                setMessage(
                    data.message || "Registration successful!"
                );

                setName("");
                setEmail("");
                setPassword("");
                setRole("");
            } else {
                setMessage(
                    data.message || "Registration failed!"
                );
                console.log(data);
            }
        } catch (error) {
            console.log("Error:", error);
            setMessage(
                "Cannot connect to server. Check your backend."
            );
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    required
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    required
                />

                <br /><br />

                <select
                    value={role}
                    onChange={(event) =>
                        setRole(event.target.value)
                    }
                    required
                >
                    <option value="" disabled>
                        Choose your role
                    </option>

                    <option value="HR">
                        HR
                    </option>

                    <option value="EMPLOYEE">
                        Employee
                    </option>
                </select>

                <br /><br />

                <button type="submit">
                    Register
                </button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Register;
