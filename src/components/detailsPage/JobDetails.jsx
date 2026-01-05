import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getJobUsingId } from '../../api/job.axios.js'

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fatchJob = async () => {
            try {
                const res = await getJobUsingId(id);
                setJob(res.data.data)
            } catch (error) {
                console.error("Error fatching Job:", error);

            } finally {
                setLoading(false)
            }

        };
        fatchJob();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-20">Loading...</div>;
    }
    if (!job) {
        return <div className="text-center mt-20">Job not found</div>;
    }



    return (
        <div className="max-w-6xl mx-auto mt-20 bg-white shadow rounded">

            <div className="bg-slate-800 text-white p-6 rounded-t">
                <h1 className="text-3xl font-bold">{job.title}</h1>
            </div>

            <div className="flex gap-4 p-4 text-sm text-gray-600">
                <span className="bg-gray-100 px-3 py-1 rounded">
                    {job.company}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded">
                    {job.location}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded">
                    {job.jobType}
                </span>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

                <div className="md:col-span-2">
                    <h2 className="text-lg font-semibold mb-2">Job Description</h2>
                    <p className="text-gray-700 mb-6">
                        {job.description}
                    </p>

                    <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                    <ul className="list-disc ml-5 text-gray-700 mb-6">
                        {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">Benefits</h2>
                    <ul className="list-disc ml-5 text-gray-700">
                        {job.benefits.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div>

                <div className="border rounded p-4 space-y-4">
                    <Link
                        to={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-blue-600 text-white py-2 rounded"
                    >
                        Apply Now
                    </Link>

                    <div className="bg-blue-50 p-4 rounded">
                        <p className="font-semibold">Salary</p>
                        <p>{job.salary}</p>
                    </div>

                    <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Job Type:</strong> {job.jobType}</p>
                        <p><strong>Shift:</strong> {job.shift}</p>
                        <p>
                            <strong>Posted:</strong>{" "}
                            {new Date(job.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );



}

export default JobDetails
