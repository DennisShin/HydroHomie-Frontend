import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from "./Navbar"
import Footer from "./Footer"

function Root() {

    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;