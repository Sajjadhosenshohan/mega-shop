import axios from "axios";
// http://localhost:3000
const axiosPublic = axios.create({
    baseURL: 'https://mega-store-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;