import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post('http://localhost:3001/auth/login', { email, password })
            .then(result => {
                setLoading(false);
                if (result.data.message === "Success") 
                    {
                    console.log("Login Success");
                    alert('Login successful!');
                    // Save login state in localStorage
                    localStorage.setItem('isLoggedIn', 'true');
                    navigate('/home');
                } else {
                    alert('Incorrect email or password! Please try again.');
                }
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                alert('Something went wrong. Please try again later.');
            });
    };

    return (
        <div className="login-container">
    <div className="login-box">
        <h2 className="mb-3 text-primary">Login</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="input-group" style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="exampleInputEmail1" style={{ marginBottom: "5px", fontWeight: "bold" }}>Email Id</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="input-field"
                    id="exampleInputEmail1"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "100%"
                    }}
                />
            </div>
            <div className="input-group" style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="exampleInputPassword1" style={{ marginBottom: "5px", fontWeight: "bold" }}>Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-field"
                    id="exampleInputPassword1"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "100%"
                    }}
                />
            </div>
            <button
                type="submit"
                className={`btn btn-primary animated-button ${loading ? "loading" : ""}`}
                disabled={loading}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "blue",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
        <p className="my-2">Don&apos;t have an account?</p>
        <Link to="/register" className="btn btn-secondary animated-button" style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "gray",
            color: "white",
            textAlign: "center",
            display: "inline-block",
            width: "100px"
        }}>Register</Link>
    </div>
</div>

    );
}
export default Login;
