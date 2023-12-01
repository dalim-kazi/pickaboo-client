import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const fetchCartProducts = async (email) => {
  try {
    const res = await axios.get(`https://bata-server.vercel.app/cartProducts?email=${email}`);
    return res.data;
  } catch (error) {
    throw new Error("Error fetching cart products");
  }
};

const UseAddToCart = () => {
  const { user } = useContext(AuthContext);

  const { data: cartProducts=[], refetch, isLoading, isError } = useQuery(
    ['cartProducts', user?.email],
    () => fetchCartProducts(user?.email),
    {
      refetchOnWindowFocus: false, 
      staleTime: 60000,  
      cacheTime: 300000,  
      retry: 1,  
      onError: (error) => {
        console.error('An error occurred during data fetching:', error);
      },
    }
  );

  return [cartProducts, refetch, isLoading, isError]  ;
};

export default UseAddToCart;