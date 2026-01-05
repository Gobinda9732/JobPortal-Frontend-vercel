import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

function Navber() {

    const navigate = useNavigate();
    return (
        <nav className="fixed top-0 left-0 w-full bg-indigo-600 text-white px-6 py-4 flex justify-between items-center z-50">
            <div className="max-w-7xl mx-auto px-4 flex w-full justify-between items-center">
                <Link to='/' className="flex items-center">
                    <h1 className="text-xl font-bold">
                        JobPortal
                    </h1>
                </Link>

                <Button
                    onClick={() => navigate('/login')}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black'
                    }}
                    variant="contained"
                >
                    Login
                </Button>
            </div>
        </nav>
    )
}

export default Navber
