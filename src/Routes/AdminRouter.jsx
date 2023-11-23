import { useContext } from "react";
import UseAdmin from "../Hook/UseAdmin/UseAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

 

const AdminRouter = ({children}) => {
    const [isAdmin, isLoading] = UseAdmin()
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    if (isLoading || loading) {
        return  <Spinner className="h-16 w-16 text-blue-600 mt-20 mx-auto" />;
    }
    if (user && isAdmin==='admin') {
        return children
    }
    return  <Navigate to="/" state={{ from: location }} replace />
};

export default AdminRouter;