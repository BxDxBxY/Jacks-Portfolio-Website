import axios from "axios"
const Axios = axios.create({
    baseURL:"http://localhost:3030"
})
let token = localStorage.getItem("token")
Axios.interceptors.request.use(
    (config)=>{
    if (token) {
        config.headers["Authorization"] =`Basic YWRtaW46MTIz`;
    }
    config.headers["Accept"] = `application/json`;
    return config
    },
    (error)=>Promise.reject(error)
)

export default Axios
