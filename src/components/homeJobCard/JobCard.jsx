import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobCard({ job }) {

    const navigate = useNavigate();


    const [showMore, setShowMore] = useState(false);

    const words = job.description.split(" ");
    const isLong = words.length > 15;

    const shortDescription = words.slice(0, 15).join(" ");

    const handleViewJob = () => {
        navigate(`/jobdetails/${job._id}`);
    };
    return (
        <div className="bg-white rounded-2xl shadow-sm border p-5 m-3 flex justify-between items-start">

            {/* Left Content */}
            <div >
                <h2 className="text-xl font-semibold text-gray-900">
                    {job.title}

                </h2>

                <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span>{job.salary}</span>
                </div>

                <p className="text-gray-600 text-sm mt-3 max-w-xl">
                    {showMore || !isLong
                        ? job.description
                        : shortDescription + "..."}

                    {isLong && (
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-blue-600 ml-2 text-sm font-medium hover:underline"
                        >
                            {showMore ? "Show less" : "more"}
                        </button>
                    )}                </p>
            </div>

            {/* Right Button */}
            <button
                onClick={handleViewJob}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                View Job
            </button>

        </div>
    )
}

export default JobCard
