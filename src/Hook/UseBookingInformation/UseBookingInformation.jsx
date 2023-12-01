import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

 

const UseBookingInformation = () => {
    const {user}=useContext(AuthContext)
    const { data: bookingInformation={} ,refetch} = useQuery({
        queryKey: ['bookingInformation',user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://bata-server.vercel.app/bookingInformation?email=${user?.email}`)
            return res.data
        }
    })
    
    return  [bookingInformation,refetch]
};

export default UseBookingInformation;