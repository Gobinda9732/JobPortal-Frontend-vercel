import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJob, deleteJob } from "../../api/job.axios.js";
import AdminNavber from "./AdminNavber.jsx";
import AdminJobCard from "./AdminJobCard.jsx";

function Admin() {
    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const response = await getAllJob();
            setJobs(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) navigate("/login");
    }, [navigate]);

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this job?")) return;
        await deleteJob(id);
        fetchJobs();
    };

    return (

        <>
            <div className="max-w-3xl mx-auto mt-8 bg-white rounded shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>

                {jobs.length === 0 && (
                    <p className="text-center text-gray-500">No jobs found</p>
                )}

                {jobs.map(job => (
                    <AdminJobCard key={job._id} job={job} onDelete={handleDelete} />
                ))}
            </div>

        </>
    );
}

export default Admin;
