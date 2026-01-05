import api from "./axios.js";
const loginAdmin = (body) => {
    return api.post("/user/login", body);
};

export { loginAdmin };
