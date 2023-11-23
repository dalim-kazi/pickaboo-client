import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Card, Spinner } from "@material-tailwind/react";
import ProductsCard from "../ProductsCard/ProductsCard";

 
const SearchProducts = () => {
    const { searchProducts ,loading} = useContext(AuthContext)
    if (loading) {
        return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-80" />
    }
    return (
        <>
            {
                searchProducts?.length>0? <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mx-5 mb-20 mt-10">
                {
                     searchProducts?.map(item=><ProductsCard key={item._id} productsDetails={item}></ProductsCard>)
                } 
                </div> : <>
                
                <Card className="mt-10 mb-20 w-full h-full shadow-none mx-auto p-10">
                            <p className="text-2xl font-bold mb-1">Products (0)</p>  
                     <hr />       
                <div className="p-20 mx-auto">
                 <img src="https://www.pickaboo.com/_next/static/images/empry-cart-17e583c2859b7c0951bb12abb2e6808f.svg" alt="" />  
                <p className="text-orange-600 text-2xl mt-10 text-center mb-1">Your products is empty</p> 
                <p className="text-center">Looks like you haven’t added anything to your cart yet</p>    
                </div>        
            </Card>    
                    </>
          }  
      
       </>
    );
 };
 
 export default SearchProducts;