import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const UseProductsView = () => {
    const { user } = useContext(AuthContext)
    const {data:viewProducts=[],refetch} = useQuery({
        queryKey: [user?.email,'viewProducts'],
        queryFn: async () => {
            const res = await axios.get(`https://bata-server.vercel.app/viewProducts?email=${user?.email}`,)
            return res.data
        }
    })
    return  [viewProducts,refetch]
};

export default UseProductsView;