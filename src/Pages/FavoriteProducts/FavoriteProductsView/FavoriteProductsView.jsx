import {useParams } from "react-router-dom";
import ProductsOverView from "../../../component/ProductsOverView/ProductsOverView";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

 

const FavoriteProductsView = () => {
    const { id } = useParams();
    const { data: products,refetch, isLoading, isError } = useQuery(
      ['favoriteProducts', id],
      async () => {
        try {
          const res = await axios.get(`https://bata-server.vercel.app/favoriteProducts/${id}`);
          return res.data;
        } catch (error) {
          console.error("Error loading product data:", error);
          throw new Error("Error loading product data");
        }
      },
      {
        
        staleTime: 60000,  
        retry: 2,  
        refetchOnWindowFocus: false,   
      }
    );
  
    if (isLoading) {
      return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-10 mb-52" />;
    }
  
    if (isError || !products) {
      return <div>Error loading product data</div>;
    }
    
    return (
        <div >
            <ProductsOverView products={products} refetch={refetch}></ProductsOverView>
        </div>
    );
};

export default FavoriteProductsView;