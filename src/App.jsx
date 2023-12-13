import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useLocation } from 'react-router-dom'
import watercup from '/watercup.svg'
import Nav from './Navbar'


export default function App() {

  const [user, setUser] = useState({})
  const location = useLocation();
  const userData = location.state;


  useEffect(() => {
    fetch("/api/userData")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setUser(data)})
    }, [])

  const [count, setCount] = useState(localStorage.getItem('counter') || 0)
  // console.log(count)

  useEffect(() => {
    localStorage.setItem('counter', count);
  },[count])



  // useEffect(() => {
  // }, {})




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
      <h1 className='text-white text-6xl w-min ml-auto mr-auto pt-10'>HydroHomie</h1>
      <img className='h-24 justify-center w-min ml-auto mr-auto mb-7 mt-7' src={watercup} alt='watercup' />
      <div className="card">
        <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center' onClick={() => setCount((count) => Number(count) + 1)}>
          +
        </button>
        <h1 className='text-4xl text-center mt-4 mb-4 text-white'>{count}</h1>
        <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center' onClick={() => setCount((count) => Number(count) - 1)}>
          -
        </button>
      </div>

    </div>
  )
}

