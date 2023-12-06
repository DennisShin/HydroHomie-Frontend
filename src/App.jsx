import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import watercup from '/watercup.svg'
import Nav from './Navbar'

function App() {
  const [count, setCount] = useState(localStorage.getItem('counter') || 0)
  console.log(count)

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
    <>
      <Nav />
      <h1 className='text-white text-6xl w-min ml-auto mr-auto mt-4'>HydroHomie</h1>
      <img className='h-24 justify-center w-min ml-auto mr-auto mb-7 mt-7' src={watercup} alt='watercup' />
      <div className="card">
        <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center' onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <h1 className='text-4xl text-center mt-4 mb-4 text-white'>{count}</h1>
        <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg w-48 h-9 self-center' onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  )
}
// 　　　 　　／＞　　フ
// 　　　 　　| 　_　 _ l
// 　 　　 　／` ミ＿xノ
// 　　 　 /　　　 　 |
// 　　　 /　 ヽ　　 ﾉ
// 　 　 │　　|　|　|
// 　／￣|　　 |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　＼二つ

export default App
