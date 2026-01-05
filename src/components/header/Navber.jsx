import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

function Navber() {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const q = (searchTerm).trim();
        navigate(`/?q=${encodeURIComponent(q)}`);
    };
    return (
        <nav className="fixed top-0 left-0 w-full bg-indigo-600 text-white px-6 py-4 flex justify-between items-center z-50">
            <div className="max-w-7xl mx-auto px-4 flex w-full justify-between items-center">
                <Link to='/' className="flex items-center">
                    <h1 className="text-xl font-bold">
                        JobPortal
                    </h1>
                </Link>
                <div className="hidden sm:flex gap-3 flex-1 max-w-xl items-center">
                    <input
                        type="text"
                        placeholder="Search by job title or company"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                        className="border text-gray-700 bg-white px-4 py-2 rounded-2xl w-full"
                    />
                    <Button
                        onClick={handleSearch}
                        sx={{
                            backgroundColor: 'white',
                            color: 'black'
                        }}
                        variant="contained"
                    >
                        Search
                    </Button>
                </div>
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
