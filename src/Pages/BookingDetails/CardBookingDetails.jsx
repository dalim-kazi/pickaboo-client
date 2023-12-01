import { useContext } from "react";
import UseAddToCart from "../../Hook/UseAddToCart/UseAddToCart";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingDetails from "./BookingDetails";
 

const CardBookingDetails = () => {
    const [cartProducts,isLoading, isError] = UseAddToCart()
    const { user } = useContext(AuthContext)

  
    return (
        <div>
            <BookingDetails products={cartProducts} email={user?.email} isLoading={isLoading} isError={isError}></BookingDetails>
        </div>
    );
};

export default CardBookingDetails;