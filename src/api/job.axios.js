import api from "./axios.js";

const getAllJob = () => {
    return api.get("/job/get-all-job");
};
const getJobUsingId = (id) => {
    return api.get(`/job/get-job/${id}`);
};
const getJobUsingPagination = (page = 1, limit = 6) => {
    return api.get(
        `/job/get-job-using-pagination?page=${page}&limit=${limit}`
    );
};
const createJob = (fromdata) => {
    return api.post("/job/create-job", fromdata);
};
const deleteJob = (id) => {
    return api.delete(`/job/delete-job/${id}`);
};

export { getAllJob, getJobUsingId, getJobUsingPagination, createJob, deleteJob };
