import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button, 
} from "@material-tailwind/react";
import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
 
const ProductsCard = ({productsDetails}) => {
  const { tittle, image, price, price2 ,_id} = productsDetails
  
    return (
        <>
        
        <Card className="shadow-none hover:shadow-lg hover:border-2 w-full h-[21rem] group relative cursor-pointer">
        <p className="absolute top-0 right-0 mx-3 mt-2 mb-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"><FaRegHeart className="text-lg"></FaRegHeart></p>
          <CardHeader shadow={false} floated={false} className="mt-8 rounded-sm"> 
        <img
          src={image[0]}
          className="w-full h-full object-cover transform transition-transform duration-300 delay-300 hover:scale-150 ease-in"
            />
      </CardHeader>
          <CardBody>
        <div className="items-center justify-between -mt-2">
          <Typography color="blue-gray" className="font-medium">
          {tittle.slice(0,20)}....
          </Typography>
          <Typography color="blue-gray" className="font-medium">
                            {
                            price2? <strike>TK. {price2}</strike>:<></>
                            } <span className="text-orange-600 font-bold">TK.  {price}</span>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0 -mt-2">
        <Button
          ripple={false}
              fullWidth={true}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-500 rounded-none"
        >
          <Link to={`/productsOverView/${_id}`}> SHOP NOW</Link>
        </Button>
      </CardFooter>
    </Card>
       
        </>
    );
};

export default ProductsCard;