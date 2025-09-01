import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "95a3661cdfcb481483e5e5dae575dff5"
    }
})