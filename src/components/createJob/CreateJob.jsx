import { useState } from "react";
import { createJob } from '../../api/job.axios'


const CreateJob = () => {
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        jobType: "",
        shift: "",
        requirements: [],
        benefits: [],
        description: "",
        applyLink: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "requirements" || name === "benefits") {
            setFormData((prev) => ({
                ...prev,
                [name]: value.split(",").map(item => item.trim())
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createJob(formData); // send JSON directly

            alert("Job created successfully");

            setFormData({
                title: "",
                company: "",
                location: "",
                salary: "",
                jobType: "",
                shift: "",
                requirements: [],
                benefits: [],
                description: "",
                applyLink: ""
            });
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Failed to create job");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto mt-20 bg-gray-200 p-8 rounded-2xl shadow-md space-y-5"
        >
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Create Job
            </h2>

            <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                name="requirements"
                placeholder="Requirements (comma separated)"
                value={formData.requirements.join(", ")}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
            />

            <input
                type="text"
                name="benefits"
                placeholder="Benefits (comma separated)"
                value={formData.benefits.join(", ")}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
            />

            <input
                type="text"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                </select>

                <select
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-200  focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Shift</option>
                    <option value="Morning shift">Morning shift</option>
                    <option value="Day shift">Day shift</option>
                    <option value="Evening shift">Evening shift</option>
                    <option value="Rotational shift">Rotational shift</option>
                    <option value="Weekend availability">Weekend availability</option>
                </select>
            </div>

            <textarea
                name="description"
                placeholder="Job Description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="url"
                name="applyLink"
                placeholder="Apply Link (optional)"
                value={formData.applyLink}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
                Create Job
            </button>
        </form>

    );
};

export default CreateJob;


