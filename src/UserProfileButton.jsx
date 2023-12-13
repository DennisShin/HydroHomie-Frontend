import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile(){

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);

    function logOut(event){
        fetch("http://127.0.0.1:5000/logout", {
          method: 'DELETE',
        })
        setIsLoggedIn(false)
        navigate("/login")
      }

    return(
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="User Profile Pic" src="https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" >
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={logOut}>Logout</button></li>
      </ul>
    </div>
    )
}