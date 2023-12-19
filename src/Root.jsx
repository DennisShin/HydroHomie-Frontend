import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from "./Navbar"

function Root() {

    return(
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default Root;