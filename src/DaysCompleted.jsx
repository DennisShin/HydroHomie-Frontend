import { useEffect, useState } from "react"

export default function DaysCompleted(day) {


    return(
        <>
                <div className="grid h-20 ml-auto mr-auto max-w-xl card bg-base-300 rounded-box place-items-center mb-5">
                    <div>
                        <p className=" font-semibold">{day.content}</p>
                        {/* <button className="btn btn-error btn-outline"> X </button> */}
                    </div>
                    
                    
                </div> 
        </>
    )
}