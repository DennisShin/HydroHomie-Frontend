import { useEffect, useState } from 'react'
import watercup from '/watercup.svg'
import DaysCompleted from './DaysCompleted'




export default function App() {

  const [user, setUser] = useState({})
  const [waterCount, setWaterCount] = useState()
  const [goalMet, setGoalMet] = useState(false)
  const [date, setDate] = useState("")
  const [daysCompleted, setDaysCompleted] = useState([])
  const [formattedDaysCompleted, setFormattedDaysCompleted] = useState()
  const [streak, setStreak] = useState()
  // let waterCount
  // const [userCopy, setUserCopy] = useState({
  //   ...user, 
  //   "user.amount_of_water_drank": {waterCount}
  // })


  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/users/4")
    .then(response => response.json())
    .then(data => {
        setUser(data)
        setWaterCount(data.amount_of_water_drank)
        setStreak(data.streak)
        // setDaysCompleted(data.completed_days.split("\n"))
        // setUserCopy(user))
        // console.log(daysCompleted)
      })

      if(waterCount >= user.water_goal){
        setGoalMet(true);
      }

      fetch("http://127.0.0.1:5555/api/date")
      .then(response => response.json())
      .then(data => setDate(data["Today"]))
    }, [waterCount])

  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/users/4/completed")
    .then(response => response.json())
    .then(data => {
      setDaysCompleted(data.split("\n"))
      setFormattedDaysCompleted(data)
      // console.log(formattedDaysCompleted)
    })
  },[])


  //   }, [])
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5555/api/userData", {
  //     credentials: "include"
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //       setUser(data)
  //       setWaterCount(user.amount_of_water_drank)
  //     });




  function addWaterCount(){

    // console.log(typeof(waterCount + 1))
    // console.log(waterCount + 1)

    fetch("http://127.0.0.1:5555/api/users/4", {
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        'amount_of_water_drank': waterCount + 1
      })
    })
    .then(setWaterCount(waterCount + 1))

    if(waterCount == user.water_goal - 1) {
      alert("Congratulations! You met your goal!");
    }
    if(waterCount >= user.water_goal - 1){
      setGoalMet(true);
    }
  }

  function subtractWaterCount(){
    if (waterCount >= 1){
      fetch("http://127.0.0.1:5555/api/users/4", {
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        'amount_of_water_drank': waterCount - 1
      })
    })
    .then(response => response.json())
    .then(setWaterCount(waterCount - 1));

    if(waterCount < user.water_goal + 1) {
      setGoalMet(false);
    }
    }
    else{
      alert('You are not allowed to have negative water')
    }
  }

  function addCompletedDay(){
    if(!formattedDaysCompleted.includes(date)) {
    fetch("http://127.0.0.1:5555/api/users/4", {
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        'completed_days': date + "\n" + formattedDaysCompleted,
        'streak' : 4
      })
    })
    .then(window.location.reload())
  }
  else{
    alert("You already added today!")
  }
}


  // function showDate(){
  //   fetch("http://127.0.0.1:5555/api/date")
  //   .then(response => response.json())
  //   .then(data => setDate(data["Today"]))

  // }



//   　　　 　　／＞　　フ
// 　　　 　　| 　_　 _ l
// 　 　　 　／` ミ＿xノ
// 　　 　 /　　　 　 |
// 　　　 /　 ヽ　　 ﾉ
// 　 　 │　　|　|　|
// 　／￣|　　 |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　＼二つ

  return (
    <div className='min-h-screen bg-base-200'>
      {/* <Nav /> */}
      <h3 className='text-white text-6xl w-fit ml-auto mr-auto pt-10 font-semibold'>Welcome back, {user.username}! </h3>
      <h2 className="text-white text-xl w-fit ml-auto mr-auto pt-10">Today is {date}</h2>
      <img className='h-24 justify-center w-min ml-auto mr-auto mb-7 mt-7' src={watercup} alt='watercup' />
      <div className="card">
        <button className='btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center rounded-full' onClick={addWaterCount}>
          +
        </button>
        <h1 className='text-4xl text-center mt-4 mb-4 text-white'>{user.amount_of_water_drank}</h1>
        <button className='btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center rounded-full' onClick={subtractWaterCount}>
          -
        </button>
        <progress className="progress progress-info w-3/5 self-center mt-5" value={user.amount_of_water_drank} max={user.water_goal}></progress>
        <p className=' text-center mt-2'>{(user.amount_of_water_drank / user.water_goal).toFixed(2) * 100}% Drank!</p>


        {goalMet ? <button onClick={addCompletedDay} className='btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center rounded-full mt-28'>Log Today!</button> : <button className='btn btn-disabled btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center rounded-full mt-28'>Log Today!</button>}
        {/* <button className='btn btn-disabled btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center rounded-full mt-5'>
          Log Today!
        </button> */}

      </div>

      <div className="mt-11">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,192L40,197.3C80,203,160,213,240,234.7C320,256,400,288,480,288C560,288,640,256,720,245.3C800,235,880,245,960,240C1040,235,1120,213,1200,202.7C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" data-darkreader-inline-fill="" ></path>
        </svg>
        {/* <svg id="wave" className="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(76.546, 171.107, 250.802, 1)" offset="0%" data-darkreader-inline-stopcolor="" className="--darkreader-inline-stopcolor: #04569d;"></stop><stop stop-color="rgba(0, 190.21, 255, 1)" offset="100%" data-darkreader-inline-stopcolor="" className="--darkreader-inline-stopcolor: #0098cc;"></stop></linearGradient></defs><path className="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,343L40,310.3C80,278,160,212,240,187.8C320,163,400,180,480,212.3C560,245,640,294,720,318.5C800,343,880,343,960,326.7C1040,310,1120,278,1200,228.7C1280,180,1360,114,1440,138.8C1520,163,1600,278,1680,285.8C1760,294,1840,196,1920,163.3C2000,131,2080,163,2160,163.3C2240,163,2320,131,2400,98C2480,65,2560,33,2640,49C2720,65,2800,131,2880,147C2960,163,3040,131,3120,98C3200,65,3280,33,3360,16.3C3440,0,3520,0,3600,40.8C3680,82,3760,163,3840,220.5C3920,278,4000,310,4080,334.8C4160,359,4240,376,4320,351.2C4400,327,4480,261,4560,261.3C4640,261,4720,327,4800,294C4880,261,4960,131,5040,98C5120,65,5200,131,5280,138.8C5360,147,5440,98,5520,65.3C5600,33,5680,16,5720,8.2L5760,0L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path></svg> */}
        <div className=" min-h-screen bg-waterBlue">
          <h1 className=' text-neutral-50 text-center text-4xl font-bold pt-7 pb-5'>Completed Days!</h1>
          <p className='text-neutral-50 font-bold text-2xl text-center pb-16'>Current Streak: 💧 {streak}</p>
          <div className="">
            {/* <p className=' text-neutral-50'>Is this thing on?</p> */}
            {daysCompleted.map(day =>  {
              return <DaysCompleted 
              key = {day}
              content = {day}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

