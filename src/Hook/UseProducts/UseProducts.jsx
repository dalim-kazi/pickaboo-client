import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  try {
    const res = await axios.get('https://bata-server.vercel.app/products');
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Error fetching products");
  }
};

const UseProducts = () => {
  const { data: allProducts = [], isLoading, refetch, isError} = useQuery(
    ['products'],
    fetchProducts,
    {
      staleTime: 60000,
      cacheTime: 300000, 
      retry: 2, 
      refetchOnWindowFocus: false,
      onSuccess: () => {
        console.log('Data fetching successful!');
       
      },
      onError: (error) => {
        console.error('Error during data fetching:', error);
        
      },
    }
  );

  return [allProducts, isLoading, refetch,isError];
};

export default UseProducts;