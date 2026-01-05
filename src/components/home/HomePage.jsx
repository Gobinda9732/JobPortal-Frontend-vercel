import React, { useEffect, useState } from "react";
import JobCard from '../homeJobCard/JobCard'
import Pagination from "./Pagination";
import { getAllJob, getJobUsingPagination } from '../../api/job.axios'

function HomePage() {
    const [Jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const response = await getJobUsingPagination(currentPage, 5);

                setJobs(response.data.data.jobs);
                setCurrentPage(response.data.data.currentPage);
                setTotalPages(response.data.data.totalPages);
                setError(false);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [currentPage]);

    return (
        <div className='pt-20'>
            <div className="m-5">
                <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>

                {error === true && (
                    <p className="text-center text-gray-500">Failed to load jobs. Please try again later.</p>
                )}

                {Jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
            <div className="mt-6">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>

        </div>

    )
}



export default HomePage
