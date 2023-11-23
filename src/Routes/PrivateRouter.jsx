import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location =useLocation()
    if (loading) {
        return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-20 mb-20" />
    }
    if (user) {
         return children 
     }
    return <Navigate to={'/login'} state={{from:location}} replace/>   
};

export default PrivateRouter;