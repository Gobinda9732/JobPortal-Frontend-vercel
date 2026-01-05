import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function AdminNavber() {
    const navigate = useNavigate()

    const handleCreate = () => {
        navigate('/admin/createjob')
    }

    const handleLogout = () => {
        localStorage.removeItem('adminToken')
        navigate('/')
    }

    return (
        <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
            <Link to="/admin">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </Link>

            <div className="space-x-3">
                <button
                    onClick={handleCreate}
                    className="bg-white text-indigo-600 px-4 py-2 rounded font-semibold"
                >
                    Create Job
                </button>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded font-semibold"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default AdminNavber
