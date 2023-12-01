import { Button, IconButton, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import UseAddToCart from "../../Hook/UseAddToCart/UseAddToCart";
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Cart = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [cartProducts,refetch,]=UseAddToCart()
    const handleDelete = (id) => {
        axios.delete(`https://bata-server.vercel.app/cartProducts/${id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                      position: 'top-center',
                      icon: 'success',
                      title: 'delete your products',
                      showConfirmButton: false,
                      timer: 1500
                    })
                }
        })
  }
  refetch()
   
    return (
        <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
        <IconButton variant="text" color="white" className="relative md:mr-5 outline-none outline-0">
            <PiShoppingCartFill className="md:text-xl text-2xl w-20"></PiShoppingCartFill>
                        <span className="absolute bottom-3 left-10 text-white text-md bg-black w-5 rounded-full">{cartProducts?.length}</span>       
            </IconButton>
        </MenuHandler>
        <MenuList onClick={()=>setIsMenuOpen(true)} className="overflow-visible w-80 mt-2">
        <ul className="outline-none outline-0 mt-5">
        {
            cartProducts?.map(item => <div key={item._id} className="flex items-center justify-around">
                <img className="w-20" src={item.image} alt="" />
                <div>
                    <p className="w-32">{item.tittle?.slice(0,25)}...</p>
                    <p className="font-bold">TK. {item.price}</p>
                </div>
                 <LiaTimesSolid  onClick={()=>handleDelete(item._id)} className="cursor-pointer text-lg"></LiaTimesSolid>
           </div>)               
                        }   
              {
                cartProducts?.length > 0 ? <Link to={'/addToCartView'}><Button className="rounded-none hover:bg-white hover:text-black border border-black w-full mb-5 mt-10">VIEW CART</Button></Link> : <>
                   <p className="text-center text-md">Your cart is currently empty.</p>
                  <Link to={'/sidePages/women'}><Button variant="outlined" className="rounded-none hover:bg-black hover:text-white border border-black w-full mb-5 mt-10 text-md">CONTINUE SHOPPING</Button></Link> 
                  
                </>
                      }
            </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
    );
};

export default Cart;