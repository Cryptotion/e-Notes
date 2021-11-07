import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import loginImg from "../login.svg";
import './style.css'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://localhost5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // redirect 
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged In successfully!", "success");
            // props.showAlert("Logged Successfully ", "success");
            history.push("/")

        }
        else {
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
            <div className="base-container" >
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src= {loginImg}  />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="email" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Login</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login
