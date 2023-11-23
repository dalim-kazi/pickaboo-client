 
import { useContext } from "react";
import UseProductsView from "../../Hook/UseProductsView/UseProductsView";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingDetails from "./BookingDetails";

const ProductsViewBookingDetails = () => {
    const [viewProducts] = UseProductsView()
    const { user } = useContext(AuthContext)
    return (
        <BookingDetails products={viewProducts} email={user?.email}></BookingDetails>
    );
};

export default ProductsViewBookingDetails;