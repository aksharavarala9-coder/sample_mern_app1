import {useState} from "react";

function Login() {  
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");    
    let handleLogin=(event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        // Handle login logic here
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} /><br></br>
                <input type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} /><br></br>
                <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default Login