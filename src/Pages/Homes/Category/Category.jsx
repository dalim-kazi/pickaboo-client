import { Link } from "react-router-dom";

 

 
const Category = () => {
    return (
        
             <div className="grid grid-cols-4 gap-3 mt-10">
            
            <Link to={'/sidePages/men'}>
            <div className="w-full h-full relative overflow-hidden">
                    <img className="w-full h-full object-cover transform transition-transform duration-300 delay-300 hover:scale-150 hover:animate-pulse ease-in" src="https://www.batabd.com/cdn/shop/files/men_83f8de7d-13d0-4b25-9c15-44f2b8a8f6c2_1200x_crop_center.jpg?v=1649306392" alt="" />
            </div>
            </Link>
           
            <Link to={'/sidePages/women'}>
            <div className="w-full h-full relative overflow-hidden">
                <img className="w-full h-full object-cover transform transition-transform duration-300 delay-300 hover:scale-150 hover:animate-pulse ease-in" src="https://www.batabd.com/cdn/shop/files/women_fc729eea-7c5e-411e-b8d3-e7bffad504bc_1200x_crop_center.jpg?v=1649306423" alt="" />
            </div>
            </Link>
            <Link to={"/sidePages/children"}>
            <div className="w-full h-full relative overflow-hidden">
                <img className="w-full h-full object-cover transform transition-transform duration-300 delay-300 hover:scale-150 hover:animate-pulse ease-in" src="https://www.batabd.com/cdn/shop/files/kids_90162511-b047-40e8-8f07-f4f22b3fe4b1_1200x_crop_center.jpg?v=1649306454" alt="" />
            </div>
            </Link>
            <Link to={"/sidePages/Accessories"}>
            <div className="w-full h-full relative overflow-hidden">
                <img className="w-full h-full object-cover transform transition-transform duration-300 delay-300 hover:scale-150 hover:animate-pulse ease-in" src="https://cdn.shopify.com/s/files/1/2287/9679/files/accessories_149d3d85-612c-4b01-8503-dc6870232413.jpg?v=1649306540" alt="" />
            </div>
            </Link>
        </div>
         
    );
};

export default Category;