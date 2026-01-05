import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import JobCard from '../homeJobCard/JobCard'
import Pagination from "./Pagination";
import { getAllJob, getJobUsingPagination } from '../../api/job.axios'

function HomePage() {
    const [Jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';
    const limit = 5;

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                if (query) {
                    // When searching, fetch all jobs and filter client-side
                    const response = await getAllJob();
                    // try to extract jobs from multiple possible response shapes
                    let allJobs = [];
                    if (response?.data?.data?.jobs) allJobs = response.data.data.jobs;
                    else if (response?.data?.jobs) allJobs = response.data.jobs;
                    else if (Array.isArray(response?.data)) allJobs = response.data;
                    else if (Array.isArray(response?.data?.data)) allJobs = response.data.data;

                    const q = query.trim().toLowerCase();
                    const filtered = allJobs.filter((job) => {
                        const title = (job.title || job.jobTitle || job.position || '').toString().toLowerCase();
                        const company = (job.company || job.companyName || '').toString().toLowerCase();
                        return title.includes(q) || company.includes(q);
                    });

                    const pages = Math.max(1, Math.ceil(filtered.length / limit));
                    setTotalPages(pages);
                    const start = (currentPage - 1) * limit;
                    setJobs(filtered.slice(start, start + limit));
                    setError(false);
                } else {
                    const response = await getJobUsingPagination(currentPage, limit);
                    setJobs(response.data.data.jobs);
                    setCurrentPage(response.data.data.currentPage);
                    setTotalPages(response.data.data.totalPages);
                    setError(false);
                }
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [currentPage, query]);

    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

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
