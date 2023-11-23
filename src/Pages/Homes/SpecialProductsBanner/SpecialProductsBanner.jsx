import { Link } from "react-router-dom";

 
const SpecialProductsBanner = () => {
    return (
        <div className="grid md:grid-cols-2 gap-5 mt-5 mb-10">
            <div>
                 <Link to={"/sidePages/casual"}><img className="hover:animate-pulse" src="https://www.batabd.com/cdn/shop/files/Sneaker-Studio_1200x_crop_center.jpg?v=1660631922" alt="" /></Link>
            </div>
            <div>
                 <Link to={"/sidePages/ladies-heel"}><img className="hover:animate-pulse" src="https://www.batabd.com/cdn/shop/files/For-your-special-day2_1200x_crop_center.jpg?v=1660631989" alt="" /></Link>
            </div>
        </div>
    );
};

export default SpecialProductsBanner;