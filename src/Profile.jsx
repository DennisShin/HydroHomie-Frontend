import { useEffect, useState } from "react"
import { useNavigate } from "react-router";



export default function Profile(){

    const [user, setUser] = useState({})
    const [newGoal, setNewGoal] = useState()
    const [newBottle, setNewBottle] = useState()

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


    function changeGoal(){

        // console.log(typeof(waterCount + 1))
        // console.log(waterCount + 1)
    
        fetch("http://127.0.0.1:5555/api/users/4", {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            'water_goal': newGoal
        })
        })
    }

    function changeBottle(){

        // console.log(typeof(waterCount + 1))
        // console.log(waterCount + 1)
    
        fetch("http://127.0.0.1:5555/api/users/4", {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            'size_of_main_waterbottle': newBottle
        })
        })
    }

    function handleBottleChange(e){
        if(e.target.value > 0 || e.target.value == null){
            setNewBottle(e.target.value)
        }
        else{
            alert("Your bottle must be greater than 0!")
        }
        
    }

    function handleGoalChange(e){
        if(e.target.value > 0 || e.target.value == null){
            setNewGoal(e.target.value)
        }
        else{
            alert("Your goal must be greater than 0!")
        }
        
    }


    return(
        <>
        <div>
            <div className=" ml-6 mr-auto h-screen">
                <h1 className=" w-fit text-3xl font-semibold mb-8">Your Profile</h1>
            
                <p className=" w-fit">Username: {user.username}</p>
            
                <p className=" w-fit">Hydration Goal: {user.water_goal}</p>

                <p className=" w-fit">Your Waterbottle Size: {user.size_of_main_waterbottle} oz</p>
                <form className="mt-4" onSubmit={changeBottle}>
                    <input className="rounded" type="number" value={newBottle} onChange={handleBottleChange}/> <button className="btn btn-info btn-sm"> Change Waterbottle</button>
                </form>


                <span>
                    <h2 className=" text-xl font-bold mt-20">Recommended Daily intake</h2>
                    <p>The National Academy of Medicine suggests an adequate intake of daily fluids of about 13 cups and 9 cups</p>
                    <p>for healthy men and women, respectively, with 1 cup equaling 8 ounces. </p>

                    <h1 className=" text-4xl font-semibold mb-7">Your Recommended Amount: {Math.floor(104/(user.size_of_main_waterbottle))} of your waterbottles</h1>
                </span>

                <form onSubmit={changeGoal}>
                    <input className="rounded" type="number" value={newGoal} onChange={handleGoalChange}/> <button className="btn btn-info btn-sm"> Change Goal</button>
                </form>
                

                <button className="btn btn-info mt-4 mr-4" onClick={logOut}>Logout</button>

                <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Change Username or Password</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Your Details</h3>
                        <form action="">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Username</span>
                                </div>
                                <input type="text" placeholder="Demo" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <button className="btn btn-accent mt-4" type="submit">
                                Submit
                            </button>
                        </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                    </div>
                </dialog>

            </div>
        </div>
        </>
    )
}