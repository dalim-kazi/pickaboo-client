import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

 
const UseAdmin = () => {
    const {user}=useContext(AuthContext)
    const { data: isAdmin={},isLoading } = useQuery({
        queryKey: [user?.email,'users/admin'],
        queryFn: async () => {
            const res = await axios.get(`https://bata-server.vercel.app/users/admin?email=${user?.email}`)
            return res.data.admin
        }
    })

    return  [isAdmin,isLoading]
};

export default UseAdmin;