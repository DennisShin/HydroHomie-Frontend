import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

const navigate = useNavigate()
const [user, setUser] = useState({username:"", password:""})


function handleLogInChange(event){
    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value})
    }
    // const userCred = {username: user.username, password : user.password}
    let userData = {}

function logIn(event){
    event.preventDefault();
    fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user)
    }).then(response=> response.json())
    .then(data=>{
    setUser(data)
    // setUser({username:"", password:""})
    
    if (user) {
        navigate('/home')
    }
    })
}




return(
    <>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">🚰 Login now!</h1>
        <p className="py-6">Join all your HydroHomies today by creating an account and logging in!</p>
    </div>
    <div>
        <p>TEST USER</p>
        <p>Username: gun</p>
        <p>Password: password</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={logIn}>
        <div className="form-control">
            <label className="label">
            <span className="label-text">Username</span>
            </label>
            <input type="text" name="username" value ={user.username} onChange={handleLogInChange} placeholder="Username" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" value={user.password} onChange={handleLogInChange} placeholder="Password" className="input input-bordered" required />
            {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label> */}
        </div>
        <div className="form-control mt-6">
            <button type="submit"  className="btn btn-info">Login</button> 
        </div>
        </form>
        <div role="alert" className="alert alert-success hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your purchase has been confirmed!</span>
        </div>
        <button className="btn w-72 self-center mb-4 btn-outline btn-accent mt-2">Sign Up!</button>

    </div>
    </div>
</div>
    </>
)
}