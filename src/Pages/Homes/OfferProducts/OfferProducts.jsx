import { Link } from "react-router-dom";
 

 

const OfferProducts = () => {
    return (
        <div className="mt-5">
            
            <Link to={'/sidePages/voucher'}>
                    <img src="https://cdn.shopify.com/s/files/1/2287/9679/files/GV-web-banner1_without_pre-payment.jpg?v=1698072731" alt="" />
            </Link>
          
        </div>
    );
};

export default OfferProducts;