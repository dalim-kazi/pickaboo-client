import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../component/AxiosInterceptors/UseAxiosSecure";
import { useQuery } from "react-query";

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [axiosInterceptors]=UseAxiosSecure()
    const { data: orders = [] ,refetch} = useQuery({
        queryKey: [user?.email, 'userOrders'],
        queryFn: async () => {
            const res = await axiosInterceptors.get(`/userOrders?email=${user?.email}`)
            return res.data
        }
    })
    return [orders,refetch] 
};

export default MyOrder;