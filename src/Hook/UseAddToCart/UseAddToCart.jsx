import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const UseAddToCart = () => {
    const {user}=useContext(AuthContext)
    const { data:cartProducts,refetch,isLoading} = useQuery({
        queryKey: ['cartProducts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/cartProducts?email=${user?.email}`)
            return res.data 
        }
    })
    return  [cartProducts,refetch,isLoading]
};

export default UseAddToCart;