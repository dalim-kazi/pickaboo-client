import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

 

const UseAxiosSecure = () => { 
    const Navigate = useNavigate()
    const {logOut}=useContext(AuthContext)
    const axiosInterceptors = axios.create({
        baseURL:'http://localhost:5000'
    })

    useEffect(() => {
        axiosInterceptors.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization=`bearer ${token}`
            }
            
            return config
        })
            
        axiosInterceptors.interceptors.response.use((response => response,
            async (error) => {
                if (error.response && (error.response.status=== 401 || error.response.status===403)) {
                logOut()
                 Navigate('/')
             }
            return Promise.reject(error);
        }))
    
    
    },[axiosInterceptors,Navigate,logOut])
    return [axiosInterceptors] 
};

export default UseAxiosSecure;