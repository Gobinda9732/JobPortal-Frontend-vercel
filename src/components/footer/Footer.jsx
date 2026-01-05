import React from 'react'

function Footer() {
    return (

        <footer className="w-full bg-gray-100 mt-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} JobPortal. All rights reserved.
                </p>
            </div>
        </footer>

    );
}

export default Footer
