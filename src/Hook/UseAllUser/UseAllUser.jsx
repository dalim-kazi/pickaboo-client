import { useQuery } from "react-query";
import UseAxiosSecure from "../../component/AxiosInterceptors/UseAxiosSecure";
 
 

 
const UseAllUser = () => {
    const [axiosInterceptors]=UseAxiosSecure()
    const { data: allUsers=[],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosInterceptors.get('/users')
            return res.data
        }
    })
     
    return [allUsers,refetch]
 };
 
 export default UseAllUser;
 