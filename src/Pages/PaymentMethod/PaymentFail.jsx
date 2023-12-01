import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import image from '../../assets/error/images.jpeg'
const PaymentFail = () => {
    return (
        <div className="w-72 mx-auto mt-20">
            <img className="w-24 h-24" src={image} alt="" />
            <p className="text-xl text-red-600 mb-5">something with fail</p>
            <Link to={'/'}><Button size="md" className="bg-blue-600 hover:bg-orange-600 text-white rounded-none">Continue Shopping</Button></Link>
        </div>
    );
};

export default PaymentFail;