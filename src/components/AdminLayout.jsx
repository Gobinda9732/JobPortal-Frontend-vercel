import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavber from './admin/AdminNavber.jsx'
import Footer from './footer/Footer.jsx'
function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavber />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AdminLayout
