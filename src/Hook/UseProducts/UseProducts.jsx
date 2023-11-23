import { useQuery } from 'react-query';
import axios from 'axios';

const UseProducts = () => {
    const { data:AllProducts=[],isLoading,refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/products')
            return res.data
        }
    })
      
    return  [AllProducts,isLoading,refetch]
};

export default UseProducts;