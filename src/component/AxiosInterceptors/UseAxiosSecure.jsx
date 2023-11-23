import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

 

const UseAxiosSecure = () => {
    const { logOut } =useContext(AuthContext)
    const Navigate = useNavigate()
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    });
    useEffect(() => {
        axiosSecure.interceptors.request.use( (config)=> {
            const token = localStorage.getItem('accessToken')
            if (token) {
                config.headers.Authorization =`bearer ${token}`
            }
            return config;
          });
          axiosSecure.interceptors.response.use((response) => response,
            async (error)=> {
                if (error.response && (error.response.status=== 401 || error.response.status===403)) {
                    logOut()
                    Navigate('/')
             }
            return Promise.reject(error);
          });
    }, [logOut, Navigate, axiosSecure])
    
    return [axiosSecure]
};

export default UseAxiosSecure;