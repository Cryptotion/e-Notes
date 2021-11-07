import React, { useState } from 'react'
import { useHistory } from 'react-router'
import loginImg from "../login.svg";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password:"", cpassword: ""})
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("https://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // save the auth token and redirect 
            localStorage.setItem('token', json.authtoken);
            history.push("/")
            props.showAlert("Account Created Successfully ", "success")
        }
        else{
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
            
            <div className="base-container" ref={props.containerRef} >
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src= {loginImg}  />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Name</label>
                            <input type="text" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"  onChange={onChange} aria-describedby="emailHelp"  placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password"  onChange={onChange} minLength={5} required placeholder="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" id="cpassword" name="cpassword"  onChange={onChange} minLength={5} required placeholder="confirm password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Register</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Signup
