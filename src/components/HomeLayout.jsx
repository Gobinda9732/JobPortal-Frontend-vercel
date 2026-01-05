import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './header/Navber.jsx'
import Footer from './footer/Footer.jsx'

function HomeLayout() {
    return (
        <>
            <Navber />
            <Outlet />
            <Footer />
        </>
    )
}
export default HomeLayout