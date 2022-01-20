import React from "react";
import { Link } from "react-router-dom";
import api from "../api";
import bgEnroll from '../images/bgEnroll.jpg';

const Login = () => {

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            // let { body } = req;
            let { data } = await api.get("/rlss/login");
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    return(
        <div className= "p-4" style = {{minHeight: "40rem", backgroundImage: `url(${bgEnroll})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
            <div className='container p-4 m-3' style = {{maxWidth: "40rem", float: "left",border:"2px solid white", borderRadius:"5px"}}>
                <h2>Login to Your Account</h2>  
                <form onSubmit={loginUser} method="post">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeolder="enter registered email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeolder="enter your password" />
                    <button type='submit' className='btn btn-primary my-2'>SUBMIT</button>
                </form>
                New Member? <Link to="/enroll" style={{color:"#fff", textDecoration:"none"}}>REGISTER</Link>
            </div>
        </div>
    )
}

export default Login;
