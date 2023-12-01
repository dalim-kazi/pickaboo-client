import { useParams } from "react-router-dom";
import ProductsOverView from "../../component/ProductsOverView/ProductsOverView";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

 

const ProductsCardPages = () => {
    const { id } = useParams();
    const { data: products = {},refetch, isLoading,isError} = useQuery({
        queryKey: ['products',id],
        queryFn: async () => {
            const res = await axios.get(`https://bata-server.vercel.app/products/${id}`)
            return res.data
        }
     })

    if (isLoading) {
        return  <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-10 mb-52" />;
      }
    
      if (isError) {
        return <div>Error loading product data</div>;
      }
    return (
        <div>
            <ProductsOverView products={products} refetch={refetch}></ProductsOverView>
        </div>
    );
};

export default ProductsCardPages;