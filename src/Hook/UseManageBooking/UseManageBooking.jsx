import { useQuery } from "react-query";
import UseAxiosSecure from "../../component/AxiosInterceptors/UseAxiosSecure";

const UseManageBooking = () => {
    const [axiosSecure]=UseAxiosSecure()
    const { data: manageBookings=[],refetch } = useQuery({
        queryKey: ['adminBooking'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adminBooking')
            return res.data
        }
    })
    return  [manageBookings,refetch]
    
 };
 
export default UseManageBooking;
 