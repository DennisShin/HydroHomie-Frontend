import { useEffect, useState } from "react"
import { useNavigate } from "react-router";



export default function Profile(){

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://127.0.0.1:5555/api/users/4")
        .then(response => response.json())
        .then(data => {setUser(data)});
    },[])

    function logOut(){
        fetch("http://127.0.0.1:5555/logout", {
        method: 'DELETE',
        })
        navigate("/login")
    }

    return(
        <>
            <div>
                <h1>Your Profile</h1>
            </div>
            <div>
                <p>Username: {user.username}</p>
            </div>
            <div>
                <p>Hydration Goal: {user.water_goal}</p>
            </div>
            <button className="btn btn-info" onClick={logOut}>Logout</button>
        </>
    )
}